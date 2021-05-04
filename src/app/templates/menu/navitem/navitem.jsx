import React from 'react'

import './navitem.css'
import { Link } from 'react-router-dom'

function NavItem({ active, onClick, path, icon, children }) {
  return (
    <div className="nav-item">
      <Link onClick={onClick} className="nav-item" to={path}>
        <i className={`fas fa-${icon} ${active}`} />
        <span className={`${active}`}>{children}</span>
      </Link>
    </div>
  )
}

export default NavItem
