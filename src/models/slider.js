const mongoose = require('mongoose')

const Slider=mongoose.Schema([{
    thumbnail_url:String,
    active:String,
    index:String,
}])

module.exports = mongoose.model('Slider', Slider)