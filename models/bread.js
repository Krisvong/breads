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
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

// helper instance methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker?.name}, who has been with us since ${this.baker?.startDate?.getFullYear()}. ${this.baker?.bio}.`
}

//helper static methods
// breadSchema.statics.getBakedByJoey = function () {
//   return this.find({ baker: { $eq: "Joey"} })
// }

const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread



