/* eslint-disable global-require, no-console */
import path from 'path'
import compression from 'compression'
import express from 'express'
import format from 'date-fns/format'
import graphqlHTTP from 'express-graphql'
import morgan from 'morgan'
import { makeExecutableSchema } from 'graphql-tools'

import data from './data/main'
import renderMiddleware from './middleware/render'

// Schemas
import { Job, Repo, Talk, Query, Contributor, Project } from './types'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000
const app = express()

const typeDefs = Query.concat(Job, Project, Repo, Talk, Contributor)

const resolvers = {
  Query: {
    name: () => data.name,
    age: () => data.age,
    email: () => data.email,
    company: () => data.company,
    twitter: () => data.twitter,
    github: () => data.github,
    employed: () => true,
    jobs: () => data.jobs,
    repos: () => data.repos,
    contributors: () => data.contributors,
    talks: () =>
      data.talks.map(talk => ({
        ...talk,
        date: format(talk.date, 'DD/MM/YY')
      })),
    projects: () => data.projects
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

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
