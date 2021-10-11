const express = require('express');
require("dotenv");
const app = express();
const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');

const PORT =  process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send('Server is up and running successfully...');
});

app.use('/api',productRoute);
app.use('/api',categoryRoute);

app.listen(PORT, () => {
    console.log(`Server is up and running in port ${PORT}`)
})