require('dotenv').config()
const express = require('express')
const app = express()

//middleware
app.set('views',__dirname+'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/places', require('./controllers/places'))

//routers
app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

const PORT = process.env.PORT
app.listen(PORT,console.log(`listening on port ${PORT}`))
