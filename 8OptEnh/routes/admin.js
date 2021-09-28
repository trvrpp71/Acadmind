const path = require('path');  //needed to path.join and --dirname 

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-products => GET 
router.get('/add-product', adminController.getAddProduct); 

// /admin/add-products => GET 
router.get('/products', adminController.getProducts)


// /admin/add-products => POST
router.post('/add-product', adminController.postAddProduct);



module.exports = router;

