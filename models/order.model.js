
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cart: [{ type: Array, required: true, ref: 'cart' }],
    total: { type: Number, required: true },
    order: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address1: { type: String, required: true },
        address2: { type: String, required: true },
        city: { type: String, required: true },
        region: { type: String },
        code: { type: String, required: true },
        country: { type: String, required: true },
      },
});

module.exports = mongoose.model('Order', orderSchema);