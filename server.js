// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('connected to mongo: ', process.env.MONGO_URI);
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });



// MIDDLEWARE
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
  res.send('<h1>Welcome to an Awesome App about Breads!</h1>')
})

//Breads
const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)

//404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})



