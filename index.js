const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql')
const data = require('./data/main')
const express = require('express')
const graphqlHTTP = require('express-graphql')

const PORT = process.env.PORT || 3000
const server = express()

const Repo = new GraphQLObjectType({
  name: 'Repos',
  description: 'All my github repos',
  fields: {
    name: {
      type: GraphQLString,
      description: 'Repo Name'
    },
    url: {
      type: GraphQLString,
      description: 'Link to repo'
    },
    description: {
      type: GraphQLString,
      description: 'Repo description'
    },
    language: {
      type: GraphQLString,
      description: 'Language used'
    },
    stars: {
      type: GraphQLInt,
      description: 'Number of stars'
    },
    fork: {
      type: GraphQLBoolean,
      description: 'Is it forked ?'
    },
    owner: {
      type: GraphQLString,
      description: 'Owner of the repo'
    }
  }
})

const Job = new GraphQLObjectType({
  name: 'Jobs',
  description: 'Jobs I have had or still have',
  fields: {
    company: {
      type: GraphQLString,
      description: 'Name of the Company'
    },
    title: {
      type: GraphQLString,
      description: 'Title I had there'
    },
    location: {
      type: GraphQLString,
      description: 'Where this job was located'
    },
    started: {
      type: GraphQLString,
      description: 'Started Date'
    },
    finished: {
      type: GraphQLString,
      description: 'End date'
    }
  }
})

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

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
