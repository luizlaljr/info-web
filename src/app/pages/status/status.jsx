import React from 'react'
import { useAuth } from '../../../context/auth'

import './status.css'
import Project from './components/project/project'
import Describe from './components/describe/describe'
import Info from './components/info/info'
import Main from '../../templates/main/main'

function Status() {
  const { signOut, totalizerUser } = useAuth()

  const handleLogout = () => {
    signOut()
  }

  return (
    <Main>
      <div className="status-container">
        <button type="button" onClick={handleLogout} className="button-menu">
          <i className="fas fa-sign-out-alt" />
        </button>
        <div className="status-project">
          <Project user={totalizerUser} />
        </div>
        <div className="status-describe">
          <Describe user={totalizerUser} />
        </div>
        <div className="status-info">
          <Info user={totalizerUser} />
        </div>
      </div>
    </Main>
  )
}

export default Status
