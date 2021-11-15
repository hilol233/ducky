const { Router } = require('express');
const router = Router();

// Initialize Controller
const OrderController = require('./../http/controllers/OrderController');

// router.get('/orders', OrderController.getOrders);
// router.post('/orders', OrderController.postOrder);
// router.post('orders/submit', OrderController.submitOrder );

module.exports = router;