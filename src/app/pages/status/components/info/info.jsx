import React from 'react'

import './info.css'
import Table from './table/table'

function Info({ user }) {
  return (
    <div className="info">
      <Table user={user} />
    </div>
  )
}

export default Info
