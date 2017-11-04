import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../routes/Home'
import NotFound from '../../routes/NotFound'

const App = () => {
  return (
    <div style={{height: '100%'}}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
