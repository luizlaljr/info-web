import React from 'react'

import './info.css'

function Info({ user }) {
  return (
    <>
      <div className="name">
        {user?.post} {user?.name}
      </div>
      <div className="operationality">{user?.operationality}</div>
    </>
  )
}

export default Info
