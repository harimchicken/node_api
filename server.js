// 코드 빌드 순서
// 1. 위에서 아래
// 2. = 을 기준으로 오른쪽에서 왼쪽으로 치환
// 3. . 은 하위 메소드를 호춣하는 방법
// 4. () 함수들의 모음을 표시한다.
// 5. , 는 그리고 라고 해석한다.

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const productRoute = require('./route/product')
const oruderRoute = require('./route/order')
const userRoute = require('./route/user')

require('./utils/database')
require('dotenv').config()

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// Routing
app.use('/product', productRoute)
app.use('/order', oruderRoute)
app.use('/user', userRoute)


const PORT = 7000;



// 서버 실행 함수
app.listen(PORT, () => console.log ('server started'))