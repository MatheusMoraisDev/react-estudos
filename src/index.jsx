import React from 'react'
import ReactDOM from 'react-dom/client'
import Ex1 from './ex1.jsx'
import Ex2 from './ex2.jsx'
import Ex3 from './ex3.jsx'
import Ex4 from './ex4.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p><b>Exercício 1:</b></p> 
    <Ex1 /> <br />
    <p><b>Exercício 2:</b></p>
    <Ex2 /> <br />
    <p><b>Exercício 3:</b></p>
    <Ex3 /> <br />
    <p><b>Exercício 4:</b></p>
    <Ex4 /> <br />
  </React.StrictMode>,
)
