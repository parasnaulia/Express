const express = require("express");
const app = express();
const path = require("path");
//Path is a core module
let port = 8000;
// To server static file in express we use a middleware which will help in serve the static
//file these files can be any file js ,image,html,css etc
//whenever a user req for a file if these files pat is correctly mention then middleware directly
//send the respond without going to main code if these file is not find then middleware pass
//it to next middleware.

//to use middleware we use
let staticPath = path.join(__dirname, "../public");
console.log(staticPath);
app.use(express.static(staticPath));
app.use((req, res, next) => {
  console.log("this is a middlewarre");
  //  res.send("Bhai middlware hai");
  next();
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/", (req, res) => {
  res.send("This is my Home Page");
});
app.get("/users", (req, res) => {
  res.send("This is my Home Page");
});
app.listen(port, () => {
  console.log(`Listing at Port ${port}`);
});
//This is only used fpr static files we cannot add data dynamically in this to do so we use templete
//Engine like pug, handlebars,pug etc.
