import React from 'react'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'
import Logo from '../../assets/logo.svg'

import 'graphiql/graphiql.css'
import 'normalize.css/normalize.css'

const graphQLFetcher = graphQLParams =>
  fetch('/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json())

const defaultQuery = `
  Put YA shit here
`

const Home = () => (
  <GraphiQL defaultQuery={defaultQuery} fetcher={graphQLFetcher}>
    <GraphiQL.Logo><Logo /></GraphiQL.Logo>
  </GraphiQL>
)

export default Home
