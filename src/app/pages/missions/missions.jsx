import React from 'react'

import { useAuth } from '../../../context/auth'

import Main from '../../templates/main/main'
import Mission from './mission/mission'

import './missions.css'

function Missions() {
  const { reportsUser } = useAuth()
  return (
    <Main>
      <div className="missions">
        {reportsUser?.map((report) => (
          <Mission key={report.id} mission={report} />
        ))}
      </div>
    </Main>
  )
}

export default Missions
