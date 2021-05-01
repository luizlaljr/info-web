import React from 'react'

import { handleKind } from '../../../../utils/utils'

import './icon.css'

function Icon({ icon }) {
  return (
    <div className="icon">
      {icon.number}
      <i
        className={`fas fa-${handleKind(icon.kind)}`}
        style={{ color: `${icon.color}` }}
      />
    </div>
  )
}

export default Icon
