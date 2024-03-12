const express = require("express");
const app = express();
const path = require("path");
let publicPath = path.join(__dirname, "../public");
let PartialPath = path.join(__dirname, "../views/Partials");
// console.log(publicPath);
const hbs = require("hbs");
app.use(express.static(publicPath));
// now i have to use HAndlerbars to serve dynamic file bhai
app.set("view engine", "hbs");
hbs.registerPartials(PartialPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/temp", (req, res) => {
  res.render("temp");
});
app.get("*", (req, res) => {
  res.render("error");
});
app.listen(8000, () => {
  console.log("App is listing at port 8000");
});
