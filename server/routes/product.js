const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/productModel');
const Product = mongoose.model('products');
//middleware
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/',async (req,res)=>{
    let products = await Product.find();

    return res.status(200).send({products:products});
}

)
router.post(`/`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  module.exports = router