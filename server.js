const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const port = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import burger routes
const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
console.log("localhost: 8080");
