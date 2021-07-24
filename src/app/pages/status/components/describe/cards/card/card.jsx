import React from 'react'

import './card.css'

function Card({ title, gradient, colorsGradient, amount, prevision, income }) {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(${gradient}, ${colorsGradient.colorPrimary}, ${colorsGradient.colorSecundary})`,
      }}
    >
      <div className="card-title">{title}</div>
      <div className="card-content">
        <div className="card-amount">
          Qtd:
          {amount}
          {prevision}
        </div>
        <div className="card-income">
          Valor:
          {income}
        </div>
      </div>
    </div>
  )
}

export default Card
