const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

router.route('/products').get(ProductController.getAll);
router.route('/products/:id').get(ProductController.getOne);

module.exports = router;