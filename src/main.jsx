import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './components/MainPage'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
    <MainPage />
    </React.StrictMode>
  </BrowserRouter>
  
)
