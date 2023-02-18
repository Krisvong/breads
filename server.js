// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
  res.send('<h1>Welcome to an Awesome App about Breads!</h1>')
})

//Breads
const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})



