import { useContext } from 'react'
import AuthContext from './AuthContextValue.js'

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('Az useAuth hook csak AuthProvider alatt használható.')
  }

  return context
}
