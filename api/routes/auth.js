const { Router } = require('express')
const router = Router()

// Initialize Controller
const AuthController = require('../http/controllers/AuthController');

router.post('/register', AuthController.register );
router.post('/login', AuthController.login);

module.exports = router