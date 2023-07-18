const mongoose = require('mongoose')
const IssuerSchema = new mongoose.Schema({
    title : {
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


module.exports = mongoose.model("Issuer", IssuerSchema);