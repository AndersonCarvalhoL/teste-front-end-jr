import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.sass'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" crossOrigin="" />
    </Helmet>
    <App />
  </React.StrictMode>,
)
