const mongoose = require('mongoose')

const MONGO_URI = "mongodb+srv://harim:1289@cluster1.fu72w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}


mongoose
    .connect(MONGO_URI, dbOptions)
    .then(() => console.log('MongoDB connected ...'))
    .catch(err => console.log(err))