// 1
const express = require("express")
const router = express.Router()
const orderModel = require('../models/order')

// 2

// order 전체를 불러오는 API
router.get('/', (req, res) => {
    
    orderModel
        .find()
        .populate('product')
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.status(500).json({
                err: err.message
            })
        })

        // res.json({
        //     msg: "order get"
        // })
}) 




// order 등록하는 API
router.post('/', (req, res) => {
   
    const newOrder = new orderModel ({
        product: req.body.productId,
        quantity: req.body.qty
    })

    newOrder
        .save()
        .then(result => {
            res.json({
                msg: "Order stored",
                createdOrder: result
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err.message
            })
        })

        // res.json({
        //     msg: "order registered"
        // })
})

// order 수정하는 API
router.put('/', (req, res) => {
    res.json({
        msg: "updated order"
    })
})

// order 삭제하는 API
router.delete('/:id', (req, res) => {
    
    const id = req.params.id

    orderModel
        .findByIdAndDelete(id)
        .then(result => {
            res.json({
                msg: "deleted order at " + id
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err.message
            })
        })

        // res.json({
        //     msg: "deleted order"
        // })
})




// 3
module.exports = router