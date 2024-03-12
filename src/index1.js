const express = require("express");
// const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));
// let pa=(path.join(__dirname, "../public"))
// console.log(pa);

app.get("/", (req, res) => {
  let obj = {
    Name: "Paras",
    Heading: "Paras Bhai",
  };
  res.render("index", obj);
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("error");
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*   When you access the root URL, Express renders the Handlebars template (index.hbs).
The template engine replaces the dynamic data ({{ title }} and {{ message }}) in the HTML.
The resulting HTML is sent to the client, including the link to the CSS file (/css/styles.css).
When the browser encounters the CSS link, it makes a separate request to the server for the CSS file.
express.static intercepts the request for the CSS file and serves it directly from the "public" directory.*/
