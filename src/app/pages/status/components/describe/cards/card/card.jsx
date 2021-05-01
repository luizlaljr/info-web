import React from 'react'

import './card.css'

function Card({ title, gradient, colorsGradient, amount, income }) {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(${gradient}, ${colorsGradient.colorPrimary}, ${colorsGradient.colorSecundary})`,
      }}
    >
      <div className="card-title">{title}</div>
      <div className="card-content">
        <div className="amount">
          <span>Qtd: </span>
          {amount}
        </div>
        <div className="income">
          <span>Valor: </span>
          {income}
        </div>
      </div>
    </div>
  )
}

export default Card
