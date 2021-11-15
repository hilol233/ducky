const { Router } = require('express');
const router = Router();

// Initialize Controller
const UserController = require('./../http/controllers/UserController');
const Authenticate = require('./../http/middleware/Authenticate');

router.post('/users/check-username', UserController.findUsername);

// authenticate user route
router.get('/user/orders', function(req, res, next ) { return Authenticate.authenticate(req, res, next); }, UserController.getAuthUserOrders);

module.exports = router;