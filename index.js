import {ApolloServer} from 'apollo-server-express'
import express from 'express'
import typeDefs from './typeDefs'
// import resolvers from './resolvers'

const {
    APP_PORT =4000,
    NODE_ENV ='development'
} = process.env

const IN_PROD  = NODE_ENV === 'production'

const app = express()

app.disable('x-powered-by')
const server = new ApolloServer({
    typeDefs,
    // resolvers,
    playground:!IN_PROD
}) 
server.applyMiddleware({app})

app.listen({port:4000},()=>console.log(`server ready at http://localhost:4000/${server.graphqlPath}`))