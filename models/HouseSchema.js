const Mongoose = require('mongoose')

const HouseSchema = new Mongoose.Schema({
  path: { type: String, required: true },
  persons: [{type: Schema.Types.ObjectId, ref: 'Person'}]
})

module.exports = Mongoose.model('House', HouseSchema)
