const express = require("express");
const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const addressRoute = require("./address.route");
const adminUserRoute = require ("./adminUser.route");
const foodRoute = require ("./food.route");
const countryRoute = require ("./country.route");

const router = express.Router();

router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/address", addressRoute);
router.use("/adminUser", adminUserRoute)
router.use("/country", foodRoute)
router.use("/country" , countryRoute);

module.exports = router;
