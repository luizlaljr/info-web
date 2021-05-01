import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Status from '../app/pages/status/status'
import Missions from '../app/pages/missions/missions'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Status} />
        <Route path="/missions" component={Missions} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes
