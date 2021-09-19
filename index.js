const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const homeRouter = require('./routes/home');
const bukuRouter = require('./routes/buku');

const sequelize = require('./configs/sequelize');

const Buku = require('./models/buku');

app.use(homeRouter);
app.use('/buku', bukuRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})