const mongoose = require('mongoose');

const URI = "mongodb+srv://fatima:binta@cluster0.gvuqdrk.mongodb.net/FATIMA-RESTAURANT";

const connect = () => {
    return mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
    })
};

module.exports = connect;