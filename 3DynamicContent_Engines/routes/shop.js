const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require ('./admin');
const router = express.Router();

router.get('/', (req, res, next) => { 
    // console.log('shop.js',adminData.products)         
    // res.sendFile(path.join(rootDir,'views', 'shop.html')); <---this is the "basic way"
    //with pug you need to compile the view
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path:'/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}); 


module.exports = router;
