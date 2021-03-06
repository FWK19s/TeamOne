const express = require("express");
const app = express();
const PORT = 3000;

app.use("/static", express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/submission.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.listen(PORT);
