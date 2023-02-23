// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

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



