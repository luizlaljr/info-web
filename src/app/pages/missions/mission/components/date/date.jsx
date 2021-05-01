import React from 'react'

import { handleDate } from '../../../../utils/utils'

function Date({ date }) {
  return (
    <div className="mission-date">
      <i
        className="fas fa-plane-departure"
        style={{ color: `${date.color}` }}
      />
      <span>{handleDate(date.start)}</span>
    </div>
  )
}

export default Date
