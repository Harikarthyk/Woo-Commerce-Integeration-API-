/** Express router providing customer related routes
 * @module routes/customer
 * @requires express
 */
const express = require('express');
const { 
    createNewCustomer, 
    mailVerification 
} = require('../controllers/customer');
const router = express.Router();


/**
 * Route Serving New Customer Registration
 * @name get/customer/new
 * @param {Object} body - customer data
 * @description Create new Account
 */
router.post("/customer/new", createNewCustomer);

/**
 * Route Serving Mail Verification 
 * @name post/customer/mail/verification
 * @param {Object} body - customer data
 * @description Mail Verification sending OTP to customer mail
 */
router.post('/customer/mail/verification', mailVerification);

module.exports = router;
