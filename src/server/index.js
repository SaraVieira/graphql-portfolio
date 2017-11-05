/* eslint-disable global-require, no-console */
import path from 'path'

import compression from 'compression'
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList
} from 'graphql'
import format from 'date-fns/format'
import data from './data/main'
import Job from './types/Job'
import Project from './types/Project'
import Repo from './types/Repo'
import Talk from './types/Talk'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import morgan from 'morgan'

import renderMiddleware from './middleware/render'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000
const app = express()

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
    email: {
      type: GraphQLString,
      description: 'My Email',
      resolve: () => data.email
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
    },
    talks: {
      type: new GraphQLList(Talk),
      resolve: () => data.talks.map(talk => { talk.date = format(talk.date, 'DD/MM/YY'); return talk })
    },
    projects: {
      type: new GraphQLList(Project),
      resolve: () => data.projects
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

if (isProduction) {
  app.use(compression())
} else {
  const {
    webpackDevMiddleware,
    webpackHotMiddleware
  } = require('./middleware/webpack')

  app.use(webpackDevMiddleware)
  app.use(webpackHotMiddleware)
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: false
  })
)

app.use(morgan(isProduction ? 'combined' : 'dev'))
app.use(express.static(path.resolve(__dirname, '../build')))
app.use(renderMiddleware)

app.listen(port, console.log(`Server running on port ${port}`))
