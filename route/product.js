// 1
const express = require("express")
const router = express.Router()


// 2

// product 전체를 불러오는 API
router.get('/', (req, res) => {
    res.json({
        msg: "product get"
    })
}) 

// product 상세 정보를 불러오는 API



// product 등록하는 API
router.post('/register', (req, res) => {
    
    const newProduct = {
        name: req.body.productName,
        price: req.body.productPrice,
        category: req.body.category
    }

    res.json({
        msg: "product registered",
        productInfo: newProduct
    })
})

// product 수정하는 API
router.put('/', (req, res) => {
    res.json({
        msg: "updated product"
    })
})

// product 삭제하는 API
router.delete('/', (req, res) => {
    res.json({
        msg: "deleted product"
    })
})




// 3
module.exports = router