import React from 'react'

const Produto = ({ dados }) => {
  return (
    <>
      <p>{dados.nome}</p>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
    </>
  )
}

export default Produto
