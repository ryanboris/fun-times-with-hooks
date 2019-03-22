import React from 'react'
import { render } from 'react-dom'
import App from './views/App'
import GlobalStyle from './styles/GlobalStyle'

render(
  <GlobalStyle>
    <App />
  </GlobalStyle>,
  document.getElementById('root')
)
