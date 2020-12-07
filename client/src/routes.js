import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { JsTheory } from './pages/JsTheory';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <JsTheory />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}