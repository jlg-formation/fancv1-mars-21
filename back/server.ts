import { Article } from "./../front/src/app/interfaces/article";
import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();
const port = 3000;
const www = "./public";

let articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 120 },
  { id: "a2", name: "Tournevis Cruciforme", price: 3.45, qty: 100 },
  { id: "a3", name: "Marteau", price: 5.1, qty: 200 },
  { id: "a4", name: "Tondeuse à gazon", price: 200, qty: 8 },
  { id: "a5", name: "Pince", price: 5, qty: 100 },
];

let seqId = 6;

app.use((req, res, next) => {
  console.log("req.url: ", req.url);
  next();
});

app.use(cors());
app.use(express.json());

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.post("/api/articles", (req, res) => {
  const article = req.body;
  article.id = "a" + seqId;
  seqId++;
  articles.push(article);
  res.json(article);
});

app.delete("/api/articles", (req, res) => {
  const ids: string[] = req.body;
  console.log("ids: ", ids);
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
