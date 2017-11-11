import React from 'react'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'
import Logo from '../../assets/logo.svg'
import defaultQuery from './defaultQuery'
import 'graphiql-material-theme'

const graphQLFetcher = graphQLParams =>
  fetch('/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json())

const Home = () => (
  <GraphiQL
    query={defaultQuery}
    fetcher={graphQLFetcher}
    editorTheme="material">
    <GraphiQL.Logo>
      <img src={Logo} height="30px" alt="Logo" />
    </GraphiQL.Logo>
  </GraphiQL>
)

export default Home
