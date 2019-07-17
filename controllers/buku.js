const Buku = require('../models/buku');
const sequelize = require('sequelize');

module.exports.getIndexBuku = (req, res) => {
	Buku.findOne({
		where: {
                id: 1
        }
    }).then((buku) => {
        res.status(200).json(buku);
    }).catch((error) => {
        console.log(error)
    })
}

module.exports.getAllBuku = (req, res) => {
    Buku.findAll()
    .then((buku) => {
        res.status(200).json(buku);
    }).catch((error) => {
    	console.log(error)
    })
}

module.exports.getDetailBuku = (req, res) => {
    Buku.findOne({
        where: {
            id: req.params.id
        }
    }).then((buku) => {
        res.status(200).json(buku);
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

module.exports.updateBuku = (req, res) => {
    Buku.findOne({
        where: {
            id: req.params.id
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


module.exports.destroyBuku = (req, res) => {
    Buku.destroy({
        where: {
            id: req.params.id
        }
    }).then((buku) => {
        res.status(200).json({
            msg: 'Buku telah dihapus.'
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