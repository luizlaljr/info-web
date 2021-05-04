import React, { createContext, useState, useEffect, useContext } from 'react'

import api from '../services/api'

const AuthContext = createContext()

function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [totalizerUser, setTotalizerUser] = useState(null)
  const [reportsUser, setReportsUser] = useState(null)

  const fetchTotalizerAuth = async (authUser) => {
    const { id, token } = authUser
    api.defaults.headers.Authorization = `Bearer ${token}`
    const { data } = await api.get(`/users/${id}/totalizers`)
    setTotalizerUser(data)
    return data
  }

  const fetchReportsAuth = async (authUser) => {
    try {
      const { id, token } = authUser
      api.defaults.headers.Authorization = `Bearer ${token}`
      const { data } = await api.get(`/users/${id}/reports`)
      setReportsUser(data)
      return data
    } catch (error) {
      return null
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const signinLogin = async (userEmail, userPassword) => {
    setLoading(true)
    try {
      const { data } = await api.post('/login', {
        email: `${userEmail}@fab.mil.br`,
        password: userPassword,
      })

      const userData = {
        id: data.id,
        profile: data.profile,
        token: data.token,
      }

      localStorage.setItem('user', JSON.stringify(userData))

      setUser(userData)

      fetchTotalizerAuth(userData)
    } catch (e) {
      // hasError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true)
      const storageUser = JSON.parse(localStorage.getItem('user'))
      if (storageUser) {
        const authUser = await fetchReportsAuth(storageUser)
        if (authUser) {
          fetchTotalizerAuth(storageUser)
          setUser(storageUser)
        }
      }
      setLoading(false)
    }
    loadUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        totalizerUser,
        reportsUser,
        signinLogin,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }
