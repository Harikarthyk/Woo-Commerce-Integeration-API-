const { WooCommerce } = require("../config/WooCommerce");
const { 
    sendMail, 
    generateRandomOneTimePassword 
} = require("../helpers");

exports.createNewCustomer = async (req, res) => {
    try{
        console.log(req.body)
        const {data} = req.body;
        const response = await WooCommerce.post("customers", data);
        return res.status(response?.status || 400).json({
            success: true,
            customer: response?.data
        });
    }catch(error){
        return res.status(error?.response?.status || 400).json({
            error:error?.response?.data?.message || 'Custom Error : Something went wrong.',
            success: false
        });
    }
}

exports.mailVerification = async (req, res) => {
    try {
        const {email} = req.body;
        const response = await WooCommerce.get("customers");
        const {data} = response;
        const arr = await data.filter(customer => customer.email === email);
        if(arr.length === 0){
            return res.status(400).json({
                success: false,
                error: "Sorry, Email not registered"
            });
        }
        const otp = generateRandomOneTimePassword();
        const html = `
            <p>Hey Buddy,</p>
            <p>Your Login OTP ${otp}</p>
            <p><br></p>
            <p>- Woo Commerce Connect</p>
        `;
        const to = email;
        sendMail(to,html);
        return res.status(200).json({
            success: true,
            otp : otp,
            customer: arr[0]
        });
    } catch (error) {   
        console.log(error);
        return res.status(400).json({
            success: false,
            error: "Something went wrong, Error in verifying the email"
        })
    }
}

