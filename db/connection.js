const moongose = require('mongoose')

const URI = process.env.URI

const connectDB = () => moongose.connect(URI, {useCreateIndex: true, useNewUrlParser: true , useFindAndModify: false })

module.exports = {
  connectDB
}