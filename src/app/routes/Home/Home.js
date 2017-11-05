import React from 'react'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'
import Logo from '../../assets/logo.svg'

import '../../styles/main.css'
import 'graphiql-material-theme'

const graphQLFetcher = graphQLParams =>
  fetch('/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json())

const defaultQuery = `
  # Yellow
  # My name is Sara and I am Front End Developer from Portugal
  # I made this GraphQL API as my page because everyone loves GraphQL
  # Also it's waaay easier to update like this.
  # Check out the Docs and here is a sample query

  {
    name,
    age,
    email,
    github,
    twitter,
    employed,
    talks,
    projects,
    jobs,
    repos
  }
`

const Home = () => (
  <GraphiQL
    query={defaultQuery}
    fetcher={graphQLFetcher}
    editorTheme='material'
  >
    <GraphiQL.Logo>
      <img src={Logo} height='30px' alt='Logo' />
    </GraphiQL.Logo>
  </GraphiQL>
)

export default Home
