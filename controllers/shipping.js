const { WooCommerce } = require("../config/WooCommerce")

exports.shippingRate = async (req, res) => {
    try{
        const zoneId = 2;
        const { amount } = req.body;
        const response = await WooCommerce.get(`shipping/zones/${zoneId}/methods`);
        const methods = response?.data || [];
        for(let i = 0; i < methods.length; i++){
            const method = methods[i];
            if(method.method_id === "free_shipping"){
                const { settings } = method;
                const { requires } = settings;
                const { value } = requires;
                if(Number(settings[value]?.value) <= amount){
                    return res.status(200).json({
                        success: true,
                        shipping: 0, 
                        method_id: method?.method_id,
                        method_title: method?.method_title
                    });
                };
            };
        };
        for(let i = 0; i < methods.length; i++){
            const method = methods[i];
            if(method.method_id === "flat_rate"){
                const { settings } = method;
                const { cost } = settings;
                return res.status(200).json({
                    success: true,
                    shipping: Number(cost.value),
                    method_id: method?.method_id,
                    method_title: method?.method_title
                });
            };
        };
        return res.status(200).json({
            success: false,
            shipping: 0,
            error: "No Shipping Cost Found", 
            method_id: null,
            method_title: null
        });

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            error: "Error in Calculating Shipping Rate."
        });
    }
}