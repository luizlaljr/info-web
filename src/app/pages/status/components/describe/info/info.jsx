import React from 'react'

import { handleOperationality } from '../../../../utils/utils'

import './info.css'

function Info({ user }) {
  return (
    <>
      <div className="name">
        {user?.post} {user?.name}
      </div>
      <div className="operationality">
        {handleOperationality(user?.activity, user?.operationality)}
      </div>
    </>
  )
}

export default Info
