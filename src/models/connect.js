const mongoose = require('mongoose')
const Connect=mongoose.Schema([{
    profile_img_url:String,
    channel_name:String,
    followers:String,
}])

module.exports =mongoose.model("Connect",Connect)