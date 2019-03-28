const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools') 
const db = require('./db/connection')
const typeDefs = importSchema('./schemas.graphql')
const resolvers = require('./resolvers')

const connection = db.connectDB()

connection.then(() => {
  console.log('DB Connected')
}).catch((err) => {
  console.log(err)
})

const schema = makeExecutableSchema({typeDefs, resolvers})

const server = new GraphQLServer({schema})

server.start(() => console.log('Server Connected'))

