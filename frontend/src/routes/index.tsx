import React from 'react'
import { Router } from '@reach/router'

import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'

export const App = () => (
  <Router>
      <Login path="/" />
      <Register path="/register" />
      <Home path="/home" />
      <Login path="/login" />
  </Router>
)
