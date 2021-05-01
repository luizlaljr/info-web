import React from 'react'

import { handleIncome } from '../../../../utils/utils'

function Income({ income }) {
  return (
    <div className="mission-income">
      <span>{handleIncome(income)}</span>
    </div>
  )
}

export default Income
