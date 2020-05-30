const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller');

router.post('/order', OrderController.postOrder);

module.exports = router;