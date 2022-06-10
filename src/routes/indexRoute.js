const express = require("express");
const router = express.Router();

const indexController = require("../controllers/IndexController");

router.get("/", indexController.home);
router.get("/products", indexController.products);
router.get("/login", indexController.login);

module.exports = router;
