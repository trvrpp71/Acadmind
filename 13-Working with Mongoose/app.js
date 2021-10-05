const path = require('path');
const mongoose = require('mongoose');


const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('615b7fc44eaececfee93e70c')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect(
  'mongodb+srv://tp_test:canuck01@cluster0.uei8q.mongodb.net/shop?retryWrites=true')
  .then(result => {
    User.findOne().then(user =>{
      if (!user) {
        const user = new User({
          name:'test_user',
          email: 'test@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    })


    app.listen(3000);
})
.catch(err => {
  console.log(err);
});




/* some urls for images to use in products */

//bike: https://www.publicdomainpictures.net/pictures/420000/velka/clipart-fahrrad-vintage-kunst-1631402138FZp.png
//hat: https://www.publicdomainpictures.net/pictures/420000/velka/clipart-hut-vintage-kunst.png
//silverware: https://www.publicdomainpictures.net/pictures/400000/velka/vintage-cutlery-silverware-clipart.png
//rings: https://www.publicdomainpictures.net/pictures/10000/velka/1-1203879082HMCp.jpg
//microphone: https://www.publicdomainpictures.net/pictures/10000/velka/1-1243351269pCuj.jpg