import React from 'react'
import Produto from './componentesex4/Produto'

const Ex4 = () => {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    const prod = window.localStorage.getItem('produto')
    if (prod !== null) {
      setProduto(prod)
    }
  }, [])

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ margin: '.5rem' }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ margin: '.5rem' }}>
        smartphone
      </button>
      <Produto produto = {produto}/>
    </div>
  )
}

export default Ex4
