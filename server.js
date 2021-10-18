const express = require('express');
require("dotenv");
const app = express();
const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');
const orderRoute = require('./routes/order');
const customerRoute = require('./routes/customer');
const cartRoute = require('./routes/cart');

const PORT =  process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Server is up and running successfully...');
});

app.use('/api',productRoute);
app.use('/api',categoryRoute);
app.use('/api',orderRoute);
app.use('/api',customerRoute);
app.use('/api',cartRoute);

app.listen(PORT, () => {
    console.log(`Server is up and running in port ${PORT}`)
})