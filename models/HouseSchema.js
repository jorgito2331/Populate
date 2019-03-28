const Mongoose = require('mongoose')

const HouseSchema = new Mongoose.Schema({
  path: { type: String, required: true },
  persons: [{type: Mongoose.Schema.Types.ObjectId, ref: 'Person'}]
})

module.exports = Mongoose.model('House', HouseSchema)
