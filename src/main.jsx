import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './Footer.jsx'
import Header from './header.jsx'
import GlobalStyle from './globalStyle.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App /> 
    <Footer />
  </StrictMode>,
)
