import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! from API");
});

app.listen(3002, () => {
  console.log("API server running at port 3002");
});
