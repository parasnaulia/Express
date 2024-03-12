const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello starting with express");
});
app.get("/about", (req, res) => {
  res.send("This app is created by Paras Naulia");
});
app.get("/contactUs", (req, res) => {
  res.send("This is my Contacy 99987272448");
});
app.get("/about/*", (req, res) => {
  res.send("404 error <h1> About us Page Not Found</h1>");
});

app.get("*", (req, res) => {
  res.send("404 error <h1>Page Not Found</h1>");
});

app.listen(8000, () => {
  console.log("App is listing at port 8000");
});
//With the help of express js we can do routing in easy nad efficent way.

