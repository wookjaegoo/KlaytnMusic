const mongoose = require('mongoose')
const ClientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    walletAddress: {
      type: String,
      unique: true,
    }
    
},{
    timestamps : true,
})


module.exports = mongoose.model("Client", ClientSchema);