const path = require('path');
const express = require('express');

const baseRoutes = require('./routes/base.route');


const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static('public'));


app.use(baseRoutes);

app.listen(3000);