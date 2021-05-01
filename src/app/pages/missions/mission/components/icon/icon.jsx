import React from 'react'

import { handleKind } from '../../../../utils/utils'

import './icon.css'

function Icon({ icon }) {
  return (
    <div className="icon">
      <div className="number">
        <span>{icon.number}</span>
      </div>
      <i
        className={`fas fa-${handleKind(icon.kind)}`}
        style={{ color: `${icon.color}` }}
      />
    </div>
  )
}

export default Icon
