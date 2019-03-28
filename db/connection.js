const moongose = require('mongoose')

const URI = process.env.URI

const connectDB= () => moongose.connection(URI, {useCreateIndex: true, useNewUrlParser: true })

module.exports = {
  connectDB
}