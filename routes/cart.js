/** Express router providing category related routes
 * @module routes/cart
 * @requires express
 */
const express = require('express');
const {
    addCartItem
} = require('../controllers/cart');
const router = express.Router();


/**
 * Route Serving Cart Add
 * @name get/cart/add
 * @param {Object} body - quantity, id
 * @description Cart Listing with filter
 */
router.post("/cart/add", addCartItem);

module.exports = router;
