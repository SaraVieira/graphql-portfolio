const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList
} = require('graphql')
const { expressPlayground } = require('graphql-playground-middleware')

const data = require('./data/main')
const Job = require('./types/Job')
const Repo = require('./types/Repo')
const express = require('express')
const graphqlHTTP = require('express-graphql')

const PORT = process.env.PORT || 3000
const server = express()

const queryType = new GraphQLObjectType({
  name: 'Life',
  description: 'Fun right ?',
  fields: {
    name: {
      type: GraphQLString,
      description: 'My Name',
      resolve: () => data.name
    },
    age: {
      type: GraphQLString,
      description: 'My Age',
      resolve: () => data.age
    },
    company: {
      type: GraphQLString,
      description: 'The company I work for as of now',
      resolve: () => data.company
    },
    twitter: {
      type: GraphQLString,
      description: 'My twitter link',
      resolve: () => data.twitter
    },
    github: {
      type: GraphQLString,
      description: 'My github link',
      resolve: () => data.github
    },
    employed: {
      type: GraphQLBoolean,
      description: 'Am I employed',
      resolve: () => true
    },
    jobs: {
      type: new GraphQLList(Job),
      resolve: () => data.jobs
    },
    repos: {
      type: new GraphQLList(Repo),
      resolve: () => data.repos
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})
server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)
server.get('/', expressPlayground({ endpoint: '/graphql' }))

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
