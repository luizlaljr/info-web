import React from 'react'

import { useAuth } from '../../../context/auth'

import Main from '../../templates/main/main'
import Mission from './mission/mission'

import './missions.css'

function Missions() {
  const { signOut, reportsUser } = useAuth()

  const handleLogout = () => {
    signOut()
  }

  return (
    <Main>
      <div className="missions">
        <div className="list-title"> Missões</div>
        <button type="button" onClick={handleLogout} className="button-menu">
          <i className="fas fa-sign-out-alt" />
        </button>
        {reportsUser?.map((report) => (
          <Mission key={report.id} mission={report} />
        ))}
      </div>
    </Main>
  )
}

export default Missions
