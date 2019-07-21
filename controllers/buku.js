const Buku = require('../models/buku');
const sequelize = require('sequelize');

module.exports.getAllBuku = (req, res) => {
    Buku.findAll()
    .then((buku) => {
        res.status(200).json(buku);
    }).catch((error) => {
        console.log(error)
    })
}

module.exports.getBuku = (req, res) => {
    Buku.findOne({
        where: {
            id: req.body.id
        }
    }).then((buku) => {
        res.status(200).json(buku);
    }).catch((error) => {
        console.log(error)
    })
}

module.exports.postBuku = (req, res) => {
    Buku.create({
        name: req.body.name,
        price: req.body.price
    }).then((buku) => {
        res.json(buku);
    }).catch((error) => {
        throw error;
    })
}

module.exports.deleteBuku = (req, res) => {
    Buku.destroy({
        where: {
            id: req.body.id
        }
    }).then((buku) => {
        res.status(200).json({
            message: "Done."
        })
    }).catch((error) => {
        console.log(error)
    })
}