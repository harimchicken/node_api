const mongoose = require('mongoose')



const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}


mongoose
    .connect(process.env.MONGO_URI, dbOptions)
    .then(() => console.log('MongoDB connected ...'))
    .catch(err => console.log(err))