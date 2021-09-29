const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
'data', 
'cart.json'
);


module.exports = class Cart {
    static addProduct(id, productPrice){
        //1. fetch the previous cart 
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            //2. analyize it to find existing
            const existingProductIndex = cart.products.find(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            //3. add items and increase quantity
            if(existingProduct) {
                updatedProduct = {...existingProduct };
                updatedProduct.qty = updatedProduct.qty +1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log (err);
            });
        });
        
        
    }
}