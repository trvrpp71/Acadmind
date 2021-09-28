const path = require('path');  //needed to path.join and --dirname 

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct); 

router.post('/add-product', productsController.postAddProduct);

module.exports = router;

