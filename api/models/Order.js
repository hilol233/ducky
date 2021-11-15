const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema ({
    user_id: { type: String, index: true },
    product_name: { type: String },
    product_description: { type: String },
    product_id: { type: Number},
    product_icon_url: { type: String },
    price: { type: Number },
    created_at: { type: Date },
});

module.exports = mongoose.model('Order', Order);
