import React from 'react'

import { handleColor } from '../../utils/utils'

import Title from './components/title/title'
import Icon from './components/icon/icon'
import Date from './components/date/date'
import Amount from './components/amount/amount'
import Locale from './components/locale/locale'
import Transport from './components/transport/transport'
import Income from './components/income/income'

import './mission.css'

function Mission({ mission }) {
  const color = handleColor(mission.link)

  return (
    <>
      <div className="mission">
        <Title title={mission.link} />
        <Icon
          icon={{
            kind: mission.kind,
            number: mission.number,
            color,
          }}
        />
        <div className="data">
          <div className="data-row">
            <Date date={{ start: mission.start, color }} />
            <Amount amount={{ amount: mission.amount, color }} />
          </div>
          <div className="data-row">
            <Locale locale={{ locale: mission.locale, color }} />
            <Transport transport={{ transport: mission.transport, color }} />
            <Income income={mission.income} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Mission
