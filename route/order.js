// 1
const express = require("express")
const router = express.Router()

const checkAuth = require("../middleware/check-auth")

// 2
const {
    orders_get_all,
    orders_post_order,
    orders_update_order,
    orders_delete_order,
} = require('../controllers/order')

// order 전체를 불러오는 API
router.get('/', orders_get_all) 




// order 등록하는 API
router.post('/', checkAuth, orders_post_order)

// order 수정하는 API
router.put('/', checkAuth, orders_update_order)

// order 삭제하는 API
router.delete('/:id', checkAuth, orders_delete_order)




// 3
module.exports = router