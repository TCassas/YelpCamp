const mongoose = require('mongoose')
const Campground = require('../models/campground')

//Seeds data
const cities = require('./cities')
const { places, descriptors } = require('./seedsHelper')

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

//Devuelve un elemento aleatorio de un array teniendo en cuenta su .length
const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async ()  => {
    await Campground.deleteMany({})

    for(let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 100)
        const randomPrice = Math.round(Math.random() * 500)

        const c = new Campground({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            price: randomPrice
        })

        const response = await c.save()
    }
}

//seedDB pobla la colección campgrounds con 50 entradas aleatorias (por eso los random1000, randomDescriptor, [...])
seedDB().then(() => {
    mongoose.connection.close()
})