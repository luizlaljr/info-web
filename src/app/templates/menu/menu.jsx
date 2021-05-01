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
    <aside>
      <nav>
        <NavItem path="/" icon="user">
          Status
        </NavItem>
        <NavItem path="/missions" icon="plane">
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
