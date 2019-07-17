const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');

router.get('/', bukuController.getAllBuku);

router.get('/', bukuController.getBuku);

router.post('/', bukuController.postBuku);

// router.put('/', bukuController.putBuku);

router.delete('/', bukuController.deleteBuku);

// router.post('/search/:judul', bukuController.searchBook);

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = router;