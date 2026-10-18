import { useCallback, useMemo, useState } from 'react'
import { api } from '../services/api.js'
import AuthContext from './AuthContextValue.js'

const TOKEN_STORAGE_KEY = 'karcagi-mez-admin-token'

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => window.localStorage.getItem(TOKEN_STORAGE_KEY))

  const login = useCallback(async (credentials) => {
    const result = await api.login(credentials)
    window.localStorage.setItem(TOKEN_STORAGE_KEY, result.token)
    setToken(result.token)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(TOKEN_STORAGE_KEY)
    setToken(null)
  }, [])

  const value = useMemo(() => ({ token, login, logout }), [token, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
