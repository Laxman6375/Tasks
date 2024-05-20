const express = require("express");
const app = express();
const routes = require("./Routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

const PORT = process.env.PORT;
require("./config/database").connect();

app.use("/api", routes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
