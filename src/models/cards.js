const mongoose = require('mongoose')
const Cards= mongoose.Schema([{
    title:String,
    channel_name:String,
    views:String,
    date_posted:String,
    thumbnail_url:String,
    profile_pic_url:String,
    link_url:String,
    
}])

module.exports =mongoose.model("Cards",Cards)