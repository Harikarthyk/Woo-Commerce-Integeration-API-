
const nodemailer = require('nodemailer');

exports.sendMail = async(to,html) => {
    const senderMail= "hari.jsmith494@gmail.com";
    const senderAppPassword = "btbpaghwqvjjjprn";
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: senderMail,
            pass: senderAppPassword,
        },
    });
    
    const mailOptions = {
        from: {
            name: 'Woo-Commerce Connect',
        },
        to: to,
        subject: 'Your One Time Password [ IMPORTANT !!! ]',
        html: html
    };

    transporter.sendMail(mailOptions);
    return;
}

exports.generateRandomOneTimePassword = (oneTimePasswordLength = 6) => {
    let length = oneTimePasswordLength;
    let result = "";
    while(length--){
        result += Math.floor(Math.random() * 10);
    }
    return result;
}