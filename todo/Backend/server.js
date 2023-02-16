const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.get("/v1", (req, res) => {
  res.send("<h1>home page!</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
