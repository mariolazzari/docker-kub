const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CIao Docker!!!");
});

app.listen(8080, () => console.log("Express started on port 8080."));
