//partials are basically the reusable component.which we can use anywhere in our cde by just direclty calling that
//component like nav header and footer
//we first require the templete engine like hbs and use a functionalty register partials to register a
//partial and give path as an arguments
const express = require("express");
const app = express();
const hbs = require("hbs");
let path = require("path");
let st = path.join(__dirname, "../public");
let partialpath = path.join(__dirname, "../views/partials");
console.log(partialpath);
app.use(express.static(st));
app.set("view engine", "hbs");
hbs.registerPartials(partialpath);
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(8000, () => {
  console.log("App is listing at poet 8000");
});
