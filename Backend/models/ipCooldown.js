const mongoose =require('mongoose')
const { schema } = require('./coupon')

//IP Schema 
const ipCooldownSchema=new mongoose.Schema({
    ip:{
        type:String,
        required:true,
    },
    lastClaimedAt:{
        type:Date,
        default:null
    }
})

const IpCooldown=mongoose.model('IpCooldown',ipCooldownSchema);

module.exports=IpCooldown;
