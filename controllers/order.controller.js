const Order = require('../models/order.model');
exports.postOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            order: req.body.order,
            cart: req.body.cart,
            total: req.body.total,
        });
        await newOrder.save();
        res.json(newOrder);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

exports.getOrders = async (req, res) => {

  try {
      const order = await Order.find();

      res.json(order);
  }
  catch (err) {
      res.status(500).json(err);
  }
};