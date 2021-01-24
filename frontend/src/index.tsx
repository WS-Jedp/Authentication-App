import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './styles/styled-components'

import { Provider } from './context'

import { App } from './routes'

ReactDOM.render((
  <Provider>
    <GlobalStyles />
    <App />
  </Provider>
  ), window.document.querySelector('#app'))
