import React from 'react'
import { Router } from '@reach/router'

import { Login } from '../pages/Login'

export const App = () => (
  <Router>
      <Login path="/" />
  </Router>
)
