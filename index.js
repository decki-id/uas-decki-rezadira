const express = require('express');

const app = express();

app.set('view engine', 'ejs');

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