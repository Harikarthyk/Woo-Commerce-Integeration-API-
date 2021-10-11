/** Express router providing order related routes
 * @module routes/order
 * @requires express
 */
const express = require('express');
const {
    getAllOrders
} = require('../controllers/order');
const router = express.Router();


/**
 * Route Serving Order Listing
 * @name get/order/all
 * @param {Object} query - filters
 * @description Category Listing with filter
 */
router.get("/order/all", getAllOrders);

module.exports = router;
