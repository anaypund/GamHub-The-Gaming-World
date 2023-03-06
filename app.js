require('dotenv').config()
const express=require('express')
const routes=require('./routes/main.js')
const hbs=require('hbs')
const mongooses=require('mongoose')
const connectDB= require('./db/connect')
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
mongoose.set('strictQuery', false);

const port= process.env.PORT || 5000
const start=async () =>{
try {
    connectDB(process.env.MONGO_URI)
    console.log('Connected to database!')
    // Product.deleteMany()
    // Product.create(jsonProduct)
    app.listen(port, console.log(`Server listening on ${port}...`))
} catch (error) {
    console.log(error)
}}

start()

