/** Express router providing category related routes
 * @module routes/cart
 * @requires express
 */
const express = require('express');
const {
    addCartItem,
    updateCart
} = require('../controllers/cart');
const router = express.Router();


/**
 * Route Serving Cart Add
 * @name post/cart/add
 * @param {Object} body - quantity, id
 * @description Cart Listing with filter
 */
router.post("/cart/add", addCartItem);


/**
 * Route Serving Cart Update
 * @name post/cart/update
 * @param {Object} body - quantity, id
 * @description Cart Listing with filter
 */
router.post("/cart/update", updateCart);

module.exports = router;
