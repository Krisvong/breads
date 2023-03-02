//require mongoose
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor
const { Schema } = mongoose

//Schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://www.tastingtable.com/img/gallery/30-types-of-bread-explained/intro-1657560060.jpg' },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
})

const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread

  