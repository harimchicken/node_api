const productModel = require('../models/product')

exports.products_get_all = (req, res) => {
    
    productModel
        .find()
        .then(results => {
            res.json({
                count: results.length,
                products: results.map(result => {
                    return {
                        id: result._id,
                        name: result.name,
                        price: result.price,
                        category: result.category,
                        createdAT: result.createdAt
                    }
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                err :err.message
            })
        })

    // res.json({
    //     msg: "product get"
    // })
}

exports.products_get_product = (req, res) => {

    const id = req.params.id

    productModel
        .findById(id)
        .then(product => {
            if (!product) {
                res.json({
                    msg: "no product"
                })
            } else {
                res.json(product)
            }
        })
        .catch(err => {
            res.status(500).json({
                err: err.message
            })
        })
}

exports.products_post_product = (req, res) => {
    
    const newProduct = new productModel({
        name: req.body.productName,
        price: req.body.productPrice,
        category: req.body.category
    })

    newProduct
        .save()
        .then(result => {
            res.json({
                msg: "saved product",
                productInfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err.message
            })
        })

    // res.json({
    //     msg: "product registered",
    //     productInfo: newProduct
    // })
   
}

exports.products_update_product = (req, res) => {
    
    const id = req.params.id

    productModel
        .findByIdAndUpdate(id, {
            name: req.body.productName,
            price: req.body.productPrice,
            category: req.body.category
        })
        .then(result => {
            res.json({
                msg: "updated product at " + id
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err.message
            })
        })

    // res.json({
    //     msg: "updated product"
    // })
}

exports.products_delete_product = (req, res) => {
    
    const id = req.params.id

    productModel
        .findByIdAndDelete(id)
        .then(result => {
            res.json({
                msg: "deleted product at " + id
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err.message
            })
        })

    // res.json({
    //     msg: "deleted product"
    // })
}