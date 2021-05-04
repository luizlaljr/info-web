import { React, useState } from 'react'

import Loader from '../../templates/loader/loader'

import Logo from '../../assets/images/condor.png'

import { useAuth } from '../../../context/auth'

import './login.css'

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const { loading, signinLogin } = useAuth()

  const handleFocus = () => {
    const spanInput = document.getElementById('span-input')
    spanInput.classList.remove('hidden')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    signinLogin(userEmail, userPassword)
  }

  return (
    <div className="login-container">
      <img src={Logo} alt="" />
      <h1>1°/2°GT</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <i className="fas fa-user" />
          <input
            type="text"
            className="input-user"
            onFocus={handleFocus}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <span id="span-input" className="hidden">
            @fab.mil.br
          </span>
        </div>
        <div className="input">
          <i className="fas fa-lock" />
          <input
            type="password"
            className="input-password"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value)
            }}
          />
        </div>
        {!loading ? (
          <button id="button" type="submit">
            Login
          </button>
        ) : (
          <Loader />
        )}
      </form>
    </div>
  )
}

export default Login
