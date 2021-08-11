// 1
const mongoose = require('mongoose')




// 2
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)







// 3
module.exports = mongoose.model('product', productSchema)