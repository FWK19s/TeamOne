const express = require("express");
const app = express();
const PORT = 3000;

app.use("/static", express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(`Server is listening to ${PORT}`);
