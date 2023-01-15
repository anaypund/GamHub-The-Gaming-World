const express=require('express')
const routes=require('./routes/main.js')
const hbs=require('hbs')
const mongooses=require('mongoose')
const BodyParser=require('body-parser')
const {default: mongoose}=require('mongoose')
const Cards=require('./models/cards')
const Slider=require('./models/slider')
const Connect=require('./models/connect')


const app = express()

app.use(BodyParser.urlencoded({ extended: true }))
app.use("/static",express.static("public"))
app.use("",routes)

app.set('view engine', 'hbs')
app.set("views","views")

hbs.registerPartials("views/partials")


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1/GamHub",()=>{
    console.log("db connected")

    // Connect.create([
    //     {
    //         profile_img_url:"/static/images/4140048.png",
    //         channel_name:"Krushna",
    //         followers:"25,000"
    //     },
    //     {
    //         profile_img_url:"/static/images/2202112.png",
    //         channel_name:"bajaj",
    //         followers:"36,000"
    //     },
    //     {
    //         profile_img_url:"/static/images/4140047.png",
    //         channel_name:"Krushna Bajaj",
    //         followers:"69,696"
    //     },
    // ])

    //     Slider.create([
    //         {
    //         thumbnail_url:"/static/images/img3.jpg",
    //         active:"active",

    //     },
    //         {
    //         thumbnail_url:"/static/images/img4.jpg"
    //     },
    //         {
    //         thumbnail_url:"/static/images/img1.jpg"
    //     },
    // ])

//     Cards.create([
//         {
//         title:"Video One Name",
//         channel_name:"Etzy",
//         views:"18,999",
//         date_posted:"3 Feb 2023",
//         thumbnail_url:"/static/images/img1.jpg",
//         profile_pic_url:"/static/images/4140048.png",
//         link_url:"/vid",
//     },
//         {
//         title:"Video Two Name",
//         channel_name:"Krushna",
//         views:"18,999",
//         date_posted:"3 Feb 2023",
//         thumbnail_url:"/static/images/img1.jpg",
//         profile_pic_url:"/static/images/4140048.png",
//         link_url:"/vid",
//     },
//         {
//         title:"Video Two Name",
//         channel_name:"Bajaj",
//         views:"18,999",
//         date_posted:"3 Feb 2023",
//         thumbnail_url:"/static/images/img1.jpg",
//         profile_pic_url:"/static/images/4140048.png",
//         link_url:"/vid",
//     },
// ])

})




app.listen(process.env.PORT | 5000,()=>{
    console.log('listening on port 5000........')
})