import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
