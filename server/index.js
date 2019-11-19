const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const CONNECTION_URL = `mongodb+srv://pnm_sharma:abhay@07@poonam-vrs7m.mongodb.net/test?retryWrites=true&w=majority`;

const app = express();
let product = require('./routes/product')
require('./models/productModel');
mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true });

app.use(bodyParser.json());
app.use('/api/product', product)
const PORT =process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))