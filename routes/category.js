/** Express router providing category related routes
 * @module routes/category
 * @requires express
 */
const express = require('express');
const {
    getAllCategories
} = require('../controllers/category');
const router = express.Router();


/**
 * Route Serving Category Listing
 * @name get/category/all
 * @param {Object} query - filters
 * @description Category Listing with filter
 */
router.get("/category/all", getAllCategories);

module.exports = router;
