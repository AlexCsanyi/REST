const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");

const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");

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
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
