import React from 'react'

import {
  handleLink,
  handleGradient,
  handleIncome,
} from '../../../../utils/utils'

import Card from './card/card'

import './cards.css'

function Cards({ user }) {
  return (
    <div className="cards">
      {user?.reports.map((report) => (
        <Card
          key={report?.link}
          title={handleLink(report?.link)}
          gradient="to right"
          colorsGradient={handleGradient(report?.link)}
          amount={report?.amount.toFixed(1)}
          prevision={report.link === 'C' ? `/${user.prevision}` : ''}
          income={handleIncome(report?.income)}
        />
      ))}
    </div>
  )
}

export default Cards
