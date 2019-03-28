const Mongoose = require('mongoose')

const Personschema = new Mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true}
})

module.exports = Mongoose.model('Person', Personschema)
