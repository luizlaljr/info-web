import React from 'react'

import './main.css'
import Header from '../header/header'
import Menu from '../menu/menu'
import Logo from '../logo/logo'

function Main({ children }) {
  return (
    <div className="main-container">
      <Logo />
      <Header />
      <Menu />
      <main className="main-content">{children}</main>
    </div>
  )
}

export default Main
