const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');

router.get('/', bukuController.getAllBuku);

router.get('/', bukuController.getBuku);

router.post('/', bukuController.postBuku);

router.delete('/', bukuController.deleteBuku);

router.put('/', bukuController.putBuku);

router.post('/search/:name', bukuController.searchBuku);

module.exports = router;