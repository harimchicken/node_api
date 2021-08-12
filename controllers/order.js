const orderModel = require('../models/order')

exports.orders_get_all = (req, res) => {
    
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
}

exports.orders_post_order = (req, res) => {
   
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
}

exports.orders_update_order = (req, res) => {
    res.json({
        msg: "updated order"
    })
}

exports.orders_delete_order = (req, res) => {
    
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
}