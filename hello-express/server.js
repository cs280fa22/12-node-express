import express from "express";
import path from "path";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
