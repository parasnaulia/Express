const hbs = require("hbs");
const express = require("express");
const app = express();
const path = require("path");
const static_path = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
app.use(express.static(static_path));
const temp_path = path.join(__dirname, "../templates/template");
hbs.registerPartials(temp_path);
app.get("/", (req, res) => {
  res.send("Hello This is paras Home Page");
});
app.get("/user", (req, res) => {
  //   res.send("hello this is user");
  res.render("user");
});
app.get("/contact", (req, res) => {
  //   res.send("hello this is user");
  res.render("contact");
});
app.listen(9000, () => {
  console.log("App is listing at port 8000");
});
