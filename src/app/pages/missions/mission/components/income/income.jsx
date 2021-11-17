import React from 'react'

import { handleIncome } from '../../../../utils/utils'

function Income({ income }) {
  const optionIncome = () =>
    income.link === 'G' ? (income.amount * income.wage) / 100
      : income.income

  return (
    <div className="mission-income">
      <span>{handleIncome(optionIncome())}</span>
    </div>
  )
}

export default Income
