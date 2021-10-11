/** Express router providing product related routes
 * @module routes/product
 * @requires express
 */
const express = require('express');
const {
    getAllProducts,
    getProductAllVariations,
    getProductAllReviews
} = require('../controllers/product');
const router = express.Router();


/**
 * Route Serving Product Listing
 * @name get/product/all
 * @param {Object} query - filters
 * @description Product Listing with filter
 */
router.get("/product/all", getAllProducts);


/**
 * Route Serving Product's Variations Listing
 * @name get/product/productId/variations
 * @param {String} productId - product id
 * @description All variations of single product
 */
router.get("/product/:productId/variations", getProductAllVariations);


/**
 * Route Serving Product's Variations Listing
 * @name get/product/productId/reviews
 * @param {Object} query - filters
 * @description All variations of single product
 */
router.get("/product/reviews", getProductAllReviews);

module.exports = router;
