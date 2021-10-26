const CoCartAPI = require("@cocart/cocart-rest-api").default;


exports.addCartItem = async (req, res) => {
    const { password, username } = req.body;
    const { items } = req.body;
    const CoCart = new CoCartAPI({
        url: "https://fredya15.sg-host.com/",
        consumerKey: username,
        consumerSecret: password
    });
    CoCart.post("cart/add-item", items)
        .then((response) => {
            const {status, data} = response;
            return res.status(status).json({
                cart: data,
                success: true
            });
        })
        .catch(({response}) => {
            const {status, data} = response;
            return res.status(status).json({
                error: data?.message || 'Something went wrong',
                success: false
            });
        })
}

exports.updateCart = async(req , res) => {
    const { password, username, quantity, item_key } = req.body;
    const CoCart = new CoCartAPI({
        url: "https://fredya15.sg-host.com/",
        consumerKey: username,
        consumerSecret: password
    });
    CoCart.post(`cart/item/${item_key}`, {quantity:quantity})
        .then((response) => {
            const {status, data} = response;
            return res.status(status).json({
                cart: data,
                success: true
            });
        })
        .catch(({response}) => {
            const {status, data} = response;
            return res.status(status).json({
                error: data?.message || 'Something went wrong',
                success: false
            });
        })
}