const Joi = require('joi');
const Order = require('./../../models/Order');
const OrderService = require('./../services/OrderService');

module.exports.submitOrder = function(req, res, next) {
    let product = req.body.product;
    orderService.createOrder({
        user_id: $user.id,
        product_name: product.name,
        product_description: product.description,
        product_icon_url: product.icon_url,
        price: product.price,
        created_at: new Date()
    })
        .then( (response) => {
            res.status(200)
                .json({
                    message: "Order Submited"
                });
        })
        .catch( (response) => {
            res.status(422)
                .json({
                    message: "Order canceled"
                });
        })
}