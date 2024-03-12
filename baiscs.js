const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("asdfmmsv");
});
app.listen(8000, () => {
  console.log("app is listing at port 8000");
});
