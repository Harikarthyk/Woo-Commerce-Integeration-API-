/** Express router providing category related routes
 * @module routes/checkout
 * @requires express
 */
const express = require('express');
const { shippingRate } = require('../controllers/shipping');
const router = express.Router();

router.post('/shipping', shippingRate);


module.exports = router;
