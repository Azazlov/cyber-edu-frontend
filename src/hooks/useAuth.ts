import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '@/lib/store'
import { loginUser, registerUser, fetchCurrentUser, logoutUser, clearError } from '@/features/auth/authSlice'

// Типизированные хуки для использования в приложении
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuth = () => {
  const dispatch = useAppDispatch()
  
  const { user, token, isAuthenticated, loading, error, role } = useAppSelector(
    (state: RootState) => state.auth
  )

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    role,
    login: (email: string, password: string) => dispatch(loginUser({ email, password })),
    register: (userData: { email: string; password: string; name: string }) => 
      dispatch(registerUser(userData)),
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    logout: () => dispatch(logoutUser()),
    clearError: () => dispatch(clearError())
  }
}