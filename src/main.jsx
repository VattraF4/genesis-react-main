// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Router is HERE
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter> {/* Only ONE Router */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)