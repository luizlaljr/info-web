import React from 'react'

import './amount.css'

function Amount({ amount }) {
  return (
    <div className="amount">
      <span style={{ color: `${amount.color}` }}>Qtd.: </span>
      {amount.link === 'C'
        ? Math.ceil(amount.amount).toFixed(1)
        : amount.amount}
    </div>
  )
}

export default Amount
