const mongoose = require("mongoose");

const connectDb = ()=>{
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true}).then(data=>{
        console.log(`mongoDB connected with Server ${data.connection.host}`);
    })
}

module.exports = connectDb