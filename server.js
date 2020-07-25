const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController.js");
const port = process.env.PORT || 8080;
const compression = require('compression')
 
 
// compress all responses
app.use(compression())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(port);
console.log("localhost: 8080");
