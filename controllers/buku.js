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

module.exports.putBuku = (req, res) => {
    Buku.findOne({
        where: {
            name: req.body.name
        }
    }).then((buku) => {
        if(!buku){
            return res.status(404).json({
                msg: 'Buku tidak ditemukan!'
            })
        }
        buku.name = req.body.name;
        buku.price = req.body.price;
        buku.save();
        
        return res.status(200).json({
            msg: 'Buku telah diperbarui.',
            buku: buku
        })
    }).catch((error) => {
        console.log(error)
    })
}

module.exports.searchBuku = (req, res) => {
    Buku.findAll({
        limit: 10,
        where: {
            name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + req.params.name + '%')
        }
    }).then((buku) => {
        res.status(200).json({
            msg: 'Hasil pencarian.',
            result: buku
        })
    }).catch((error) => {
        console.log(error)
    })
}

module.exports.storeBuku = (req, res) => {
    Buku.create({
        name: req.body.name,
        price: req.body.price,
    }).then((buku) => {
        res.status(200).json({
            msg: 'Buku telah disimpan.',
            buku: buku
        })
    }).catch((error) => {
        console.log(error)
    })
}