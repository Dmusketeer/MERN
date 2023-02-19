const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const app = express();

connectDB();
const port = process.env.PORT || 5000;

app.use(cors());
app.get("/v1", (req, res) => {
  res.send("<h1>home page!</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
