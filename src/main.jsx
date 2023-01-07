import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { TransitionPageProvider } from './contexts/TransitionPageProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransitionPageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </TransitionPageProvider>
  </React.StrictMode>
)
