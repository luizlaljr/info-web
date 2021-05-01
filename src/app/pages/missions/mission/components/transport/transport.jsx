import React from 'react'

function Transport({ transport }) {
  return (
    <div className="mission-transport">
      <i
        className="fas fa-shuttle-van"
        style={{ color: `${transport.color}` }}
      />
      <span>{transport.transport.toString()}</span>
    </div>
  )
}

export default Transport
