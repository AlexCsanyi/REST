const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");

const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main-layout",
  })
);
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoute);
app.use(errorController.get404);

app.listen(3000);
