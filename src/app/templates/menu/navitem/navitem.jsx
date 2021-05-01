import React from 'react'

import './navitem.css'
import { Link } from 'react-router-dom'

function NavItem({ onClick, path, icon, children }) {
  return (
    <div className="nav-item">
      <Link onClick={onClick} className="nav-item" to={path}>
        <i className={`fas fa-${icon}`} />
        <span>{children}</span>
      </Link>
    </div>
  )
}

export default NavItem
