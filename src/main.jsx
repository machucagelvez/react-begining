import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'
import './styles.css'
import { CounterApp } from './CounterApp'

// root es el id que está en el index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={10}/>
    {/* <FirstApp title="Buenas!!!"/> */}
  </React.StrictMode>
)