const { Subject } = require("@material-ui/icons");
const express = require("express");
const app = express();
const mid = (req, res, next) => {
  console.log("This is first middleare");
  next();
};
const mid2 = (req, res, next) => {
  console.log("This is first middleare 2");
  next();
};
app.use(mid);
app.use(mid2);
app.get("/", (req, res) => {
  req.url = "/about";
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

//MiddleWare
//Middle is functions which executes between req and res cycle
//They have full access of req and response object due to which it can change it
//Mostly we use middle ware for hackers and authentication whenever a req comes it first comes to middleware
//And then goes to server so middleware can stop the packets in between only
//it can be use use in storing time and ip adress in files from where it it is coming

//So here finnish the concept of middleware


 