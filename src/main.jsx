import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Store from "./redux/store";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>
)
