const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/task", (req, res) => {
  res.send("GET request for the task");
});

app.post("/api/task", (req, res) => {
  res.send("POST request for the task");
});

app.put("/api/task", (req, res) => {
  res.send("PUT request for the task");
});

app.delete("/api/task", (req, res) => {
  res.send("DELETE request for the task");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
