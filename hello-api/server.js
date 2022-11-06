import express from "express";
import { schools, terms, courses } from "./data.js";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Ali's resume at Hopkins");
});

app.get("/schools", (req, res) => {
  res.json({
    data: schools,
  });
});

app.get("/terms", (req, res) => {
  res.json({ 
		data: terms 
	});
});

app.get("/courses", (req, res) => {
  res.json({
    data: courses
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});