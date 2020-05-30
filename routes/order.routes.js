const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller');

router.post('/order', OrderController.postOrder);
router.route('/order').get(OrderController.getOrders);

module.exports = router;