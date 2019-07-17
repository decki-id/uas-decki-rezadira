const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const bukuController = require('../controllers/buku');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', bukuController.getIndexBuku);

router.get('/:id', bukuController.getDetailBuku);

router.post('/', urlencodedParser, bukuController.storeBuku);

router.post('/:id', urlencodedParser, bukuController.updateBuku);

router.post('/:id/destroy', urlencodedParser, bukuController.destroyBuku);

router.post('/search/:judul', urlencodedParser, bukuController.searchBook);

module.exports = router;