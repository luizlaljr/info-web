import React from 'react'

function Locale({ locale }) {
  return (
    <div className="mission-locale">
      <i className="fas fa-bed" style={{ color: `${locale.color}` }} />
      <span>{locale.locale}</span>
    </div>
  )
}

export default Locale
