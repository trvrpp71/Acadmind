const express = require('express');
const bodyParser = require ('body-parser');

const app = express();

const users = [];


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res, next) => {
    res.render('index', {pageTitle: "User List", users: users});
});

app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'Add User' });
});

app.post('/add-user', (req, res, next) => {
    users.push( {name: req.body.username });
    res.redirect('/');
});

app.listen(3000);