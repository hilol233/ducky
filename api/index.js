require('./config/cors');
require('./config/db');
const express = require('express')

// Create express instance
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Require API routes
const auth = require('./routes/auth');
const user = require('./routes/user');
const order = require('./routes/order');

// Import API Routes
app.use(auth)
app.use(user);
app.use(order);

// Export express app
module.exports = app
