import React from 'react'
import { Router } from '@reach/router'

import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

export const App = () => (
  <Router>
      <Login path="/" />
      <Register path="/register" />
      <Login path="/login" />
  </Router>
)
