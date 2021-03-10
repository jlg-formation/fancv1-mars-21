import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();
const port = 3000;
const www = "./public";

app.use((req, res, next) => {
  console.log("req.url: ", req.url);
  next();
});

app.use(cors());

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
