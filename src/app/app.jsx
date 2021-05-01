import React from 'react'

import Routes from '../routes/routes'

import { AuthProvider } from '../context/auth'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
