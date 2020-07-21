const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController.js");
const port = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(port);
console.log("localhost: 8080");

//server is having a Error: listen EADDRINUSE: address already in use :::8080 error
