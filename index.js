const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const Campground = require('./models/campground')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '))
db.once('open', () => {
    console.log('Database connected')
})

app.get('/', (req, res) => {
    res.send('test')
})

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({})

    res.json(campgrounds)
})

app.get('/campgrounds/:id', async (req, res) => {
    const { id } = req.params
    const campground = await Campground.findById(id)

    res.json(campground)
})

app.post('/campgrounds', async (req, res) => {
    const { title, location, price } = req.body
    const campground = await new Campground({ title, location, price })
    
    await campground.save()
    
    res.json(campground)
})

app.put('/campgrounds/:id', async (req, res) => {
    const { title, location, price } = req.body
    const { id } = req.params
    
    const campground = await Campground.findByIdAndUpdate(id, req.body)

    res.json(campground)
})

app.delete('/campgrounds/:id', async (req, res) => {
    const { id } = req.params

    const campground = await Campground.findByIdAndDelete(id)

    res.json(campground)
})

app.listen(PORT || env.PORT, (req, res) => {
    console.log("Server on")
})