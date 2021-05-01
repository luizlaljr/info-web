import React from 'react'

import { handleLink } from '../../../../utils/utils'

import './title.css'

function Title({ link }) {
  return <div className="title">{handleLink(link)}</div>
}

export default Title
