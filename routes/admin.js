const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/ => GET
router.get("/products", adminController.getAdminProducts);
router.get("/add-product", adminController.getAddProduct);

// /admin/ => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
