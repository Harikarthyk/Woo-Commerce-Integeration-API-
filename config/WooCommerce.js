const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const URL = process.env.URL || "https://fredya15.sg-host.com";
const CONSUMER_KEY =  process.env.CONSUMER_KEY || "ck_3f2120066e9487c0bb95014f43e5632fa754e54f";
const CONSUMER_SECRET = process.env.CONSUMER_SECRET || "cs_0a3a92be577ae1d1f131447abc98f1269f371662";
const WooCommerce = new WooCommerceRestApi({
    url: URL,
    consumerKey: CONSUMER_KEY,
    consumerSecret: CONSUMER_SECRET,
    version: 'wc/v3',
});

module.exports = {WooCommerce};