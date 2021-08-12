// 1
const express = require("express")
const router = express.Router()

const checkAuth = require("../middleware/check-auth")

// 2
const {
    products_get_all,
    products_get_product,
    products_post_product,
    products_update_product,
    products_delete_product
} = require('../controllers/product')

// product 전체를 불러오는 API
router.get('/', products_get_all) 

// 로그인한 사람만 허용가능한 API
// product 상세 정보를 불러오는 API
router.get('/:id', checkAuth, products_get_product)


// product 등록하는 API
router.post('/register', checkAuth, products_post_product)

// product 수정하는 API
router.put('/:id', checkAuth, products_update_product)

// product 삭제하는 API
router.delete('/:id', checkAuth, products_delete_product)




// 3
module.exports = router