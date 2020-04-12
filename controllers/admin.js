const Product = require("../models/product");

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/admin-product-list", {
      prods: products,
      pageTitle: "Admin | Products",
      path: "/admin/products",
      hasProducts: products.length > 0,
      productCSS: true,
      activeAdminProducts: true,
    });
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);
  product.save();
  res.redirect("/");
};
