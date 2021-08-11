// 1
const express = require("express")
const router = express.Router()

const productModel = require('../models/product')


// 2

// product 전체를 불러오는 API
router.get('/', (req, res) => {
    
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
}) 

// product 상세 정보를 불러오는 API
router.get('/:id', (req, res) => {

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
})


// product 등록하는 API
router.post('/register', (req, res) => {
    
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
   
})

// product 수정하는 API
router.put('/:id', (req, res) => {
    
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
})

// product 삭제하는 API
router.delete('/:id', (req, res) => {
    
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
})




// 3
module.exports = router