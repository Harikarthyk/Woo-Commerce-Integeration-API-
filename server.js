const express = require('express');
require("dotenv");
const app = express();
const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');
const orderRoute = require('./routes/order');
const customerRoute = require('./routes/customer');

const PORT =  process.env.PORT || 5050;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is up and running successfully...');
});

app.use('/api',productRoute);
app.use('/api',categoryRoute);
app.use('/api',orderRoute);
app.use('/api',customerRoute);

app.listen(PORT, () => {
    console.log(`Server is up and running in port ${PORT}`)
})