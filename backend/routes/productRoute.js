const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProducts, getProductDetails } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authentication");

const router = express.Router();

router.route("/products").get( isAuthenticatedUser,getAllProducts)
router.route("/product/new").post( isAuthenticatedUser, authorizeRoles("admin"),  createProduct)
router.route("/product/:id").put( isAuthenticatedUser, authorizeRoles("admin"),  updateProduct).delete( isAuthenticatedUser, authorizeRoles("admin"),  deleteProducts).get(getProductDetails)
module.exports = router