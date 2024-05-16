const express = require("express");
const app = express();
const routes = require("./Routes/userRoutes");

app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log("error", error);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", routes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
