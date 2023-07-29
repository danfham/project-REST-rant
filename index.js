require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//middleware
app.set('views',__dirname+'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//routes
app.use('/places', require('./controllers/places'))

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));



//routers
app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})


const PORT = process.env.PORT
app.listen(PORT,console.log(`listening on port ${PORT}`))
