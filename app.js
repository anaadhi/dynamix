const express = require('express');
const app = express();
const path = require('path');

// middle ware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('home')
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/features', (req, res) => {
    res.render('features')
});
app.get('/download', (req, res) => {
    res.render('download');
});

// port
const port = process.env.PORT || 3000;

// server
app.listen(port, () => {
    console.log('listening on port ' + port);
});
