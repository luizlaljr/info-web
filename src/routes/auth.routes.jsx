import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../app/pages/login/login'

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthRoutes
