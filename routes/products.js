const express = require('express'); 
const { getAllProducts, getAllTestingProducts } = require('../controllers/products');
const router = express.Router();

router.route("/").get(getAllProducts)
router.route("/testing").get(getAllTestingProducts)

module.exports = router;