import React from 'react'

import './describe.css'

import Avatar from './avatar/avatar'
import Info from './info/info'
import Cards from './cards/cards'

function Describe({ user }) {
  return (
    <div className="describe">
      <Avatar user={user} />
      <Info user={user} />
      <Cards user={user} />
    </div>
  )
}

export default Describe
