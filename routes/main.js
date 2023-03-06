const express=require('express')
const Cards=require('../models/cards')
const Slider=require('../models/slider')
const Connect=require('../models/connect')

const routes=express.Router()

routes.get('/',(req,res)=>{
    res.send("Home page")
})

routes.get('/live',async(req,res)=>{
    const cards=await Cards.find()
    const slider= await Slider.find()
    const connect=await Connect.find()
    res.render("live",{
        cards:cards,
        slider:slider,
        connect:connect})
})

module.exports = routes