import React from 'react'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'
import Logo from '../../assets/logo.svg'

import '../../styles/editor.css'
import 'normalize.css/normalize.css'

const graphQLFetcher = graphQLParams =>
  fetch('/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json())

const defaultQuery = `
  # Test 

  {
    name
  }
`

const Home = () => (
  <GraphiQL
    defaultQuery={defaultQuery}
    fetcher={graphQLFetcher}
    editorTheme='material'
  >
    <GraphiQL.Logo>
      <img src={Logo} height='30px' alt='Logo' />
    </GraphiQL.Logo>
  </GraphiQL>
)

export default Home
