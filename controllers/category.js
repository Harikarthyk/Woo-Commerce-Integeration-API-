const { WooCommerce } = require("../config/WooCommerce");

exports.getAllCategories = async (req,res) => {
    try{
        const filters = req.query;
        let queries = "";
        for(let filter in filters){
            queries += (queries.length === 0 ? "" : "&") + (filter) + "=" + filters[filter];
        }
        const response = await WooCommerce.get(`products/categories/${queries}`);
        const { data } = response;
        return res.status(200).json({
            categories:data,
            success: true
        });

    }catch(error){
        return res.status(error?.response?.status || 400).json({
            error:error?.response?.data?.message || 'Custom Error : Something went wrong.',
            success: false
        });
    }
}