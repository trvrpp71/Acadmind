const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require ('express-handlebars');
const app = express();

//using pug templating engine
// app.set('view engine', 'pug');

// handlebars init
//app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' })); //hbs is an arbitrary name 
//app.set('view engine', 'hbs');  //the hbs becomes the file extension
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname,'public'))); // <==allows access to the public folder which are static files

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req,res,next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404error.html'));
    res.status(404).render('404error', {pageTitle: 'Page Not Found'});
});


app.listen(3000);