const { WooCommerce } = require("../config/WooCommerce");


exports.getAllProducts = async(req,res) => {
    try{
        const filters = req.query;
        let queries = "";
        for(let filter in filters){
            queries += (queries.length === 0 ? "" : "&") + (filter) + "=" + filters[filter];
        }
        const response = await WooCommerce.get(`products/?${queries}`);
        const { data } = response;
        return res.status(200).json({
            products:data,
            success: true
        });

    }catch(error){
        return res.status(error?.response?.status || 400).json({
            error:error?.response?.data?.message || 'Custom Error : Something went wrong.',
            success: false
        });
    }
}

exports.getProductAllVariations = async(req, res) =>{
    try{
        const { productId } = req.params;
        const response = await WooCommerce.get(`products/${productId}/variations`);
        const { data } = response;
        return res.status(200).json({
            variants:data,
            success: true
        });

    }catch(error){
        return res.status(error?.response?.status || 400).json({
            error:error?.response?.data?.message || 'Custom Error : Something went wrong.',
            success: false
        });
    }
}

exports.getProductAllReviews = async(req, res) =>{
    try{
        const filters = req.query;
        let queries = "";
        for(let filter in filters){
            queries += (queries.length === 0 ? "" : "&") + (filter) + "=" + filters[filter];
        }
        const response = await WooCommerce.get(`products/reviews/?${queries}`);
        const { data } = response;
        return res.status(200).json({
            reviews:data,
            success: true
        });

    }catch(error){
        return res.status(error?.response?.status || 400).json({
            error:error?.response?.data?.message || 'Custom Error : Something went wrong.',
            success: false
        });
    }
}
