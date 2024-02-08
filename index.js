import express from "express";
import { scrapeLogic } from "./scrapeLogic.js";

const app = express(); // function that returns an application?

const PORT = process.env.PORT || 4000;
app.listen();

app.get("/", (req, res) => {
  res.send("Express server is up and running!"); 
});

app.get("/scrape", scrapeLogic);

app.listen(PORT, () => {
  console.log(`Express App is listening on ${PORT}`);
});
