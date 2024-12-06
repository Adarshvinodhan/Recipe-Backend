const mongoose = require('mongoose');

const connectDb = async()=>{
    mongoose.connect(process.env.MONGO_URI,console.log("DB Connected Successfully"));
}

module.exports =  connectDb;