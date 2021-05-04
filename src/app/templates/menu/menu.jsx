import React from 'react'

import { useAuth } from '../../../context/auth'

import NavItem from './navitem/navitem'

import './menu.css'

function Menu() {
  const { signOut } = useAuth()

  const handleLogout = () => {
    signOut()
  }

  return (
    <aside className="menu-area">
      <nav>
        <NavItem active="active" path="/" icon="user">
          Status
        </NavItem>
        <NavItem active="" path="/missions" icon="plane">
          Missões
        </NavItem>
        <NavItem onClick={handleLogout} path="/" icon="sign-out-alt">
          Sair
        </NavItem>
      </nav>
    </aside>
  )
}

export default Menu
