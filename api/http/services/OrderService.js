const Order = require('./../../models/Order');

module.exports.createOrder = async (_orderData) => {
    let orderCreate = new Order(_orderData);
    return await orderCreate.save();
}

module.exports.findUserOrder = async (_userID) => {
    return await Order.find({ user_id: _userID });
}