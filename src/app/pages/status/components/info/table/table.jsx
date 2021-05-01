import React from 'react'

import {
  handleCondition,
  handleModulus,
  handleDocument,
  handleDate,
} from '../../../../utils/utils'

import './table.css'

function Table({ user }) {
  return (
    <div className="table">
      <div className="table-row">
        <div className="table-column title-column">Situação:</div>
        <div className="table-column">{handleCondition(user?.name)}</div>
      </div>
      <div className="table-row">
        <div className="table-column title-column">Data Início:</div>
        <div className="table-column">{handleDate(user?.date_condition)}</div>
      </div>
      <div className="table-row">
        <div className="table-column title-column">Módulo:</div>
        <div className="table-column">
          {handleModulus(user?.condition, user?.modulus)}
        </div>
      </div>
      <div className="table-row">
        <div className="table-column title-column">Documento:</div>
        <div className="table-column">
          {handleDocument(user?.condition, user?.document)}
        </div>
      </div>
    </div>
  )
}

export default Table
