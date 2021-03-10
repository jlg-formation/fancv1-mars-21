import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();
const port = 3000;
const www = "./public";

const articles = [
  { name: "Tournevis", price: 2.34, qty: 120 },
  { name: "Tournevis Cruciforme", price: 3.45, qty: 100 },
  { name: "Marteau", price: 5.1, qty: 200 },
  { name: "Tondeuse à gazon", price: 200, qty: 8 },
  { name: "Pince", price: 5, qty: 100 },
];

app.use((req, res, next) => {
  console.log("req.url: ", req.url);
  next();
});

app.use(cors());

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
