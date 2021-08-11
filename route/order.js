// 1
const express = require("express")
const router = express.Router()


// 2

// order 전체를 불러오는 API
router.get('/', (req, res) => {
    res.json({
        msg: "order get"
    })
}) 




// order 등록하는 API
router.post('/', (req, res) => {
    res.json({
        msg: "order registered"
    })
})

// order 수정하는 API
router.put('/', (req, res) => {
    res.json({
        msg: "updated order"
    })
})

// order 삭제하는 API
router.delete('/', (req, res) => {
    res.json({
        msg: "deleted order"
    })
})




// 3
module.exports = router