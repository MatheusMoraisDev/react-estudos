import React from 'react'
import ReactDOM from 'react-dom/client'
import Ex1 from './ex1.jsx'
import Ex2 from './ex2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p><b>Exercício 1:</b></p> 
    <Ex1 /> <br />
    <p><b>Exercício 2:</b></p>
    <Ex2 />
  </React.StrictMode>,
)
