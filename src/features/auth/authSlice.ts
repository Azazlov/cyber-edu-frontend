import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/types'
import { login as loginAPI, register as registerAPI, getCurrentUser as getCurrentUserAPI } from './authAPI'

// Типы состояния аутентификации
interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  role: 'student' | 'teacher' | 'admin' | null
}

// Начальное состояние
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  role: null
}

// Асинхронный thunk для логина
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginAPI(email, password)
      // Сохраняем токен в localStorage (в реальном приложении можно использовать httpOnly cookie)
      localStorage.setItem('token', response.token)
      return response
    } catch (error: any) {
      return rejectWithValue(error.message || 'Ошибка при входе')
    }
  }
)

// Асинхронный thunk для регистрации
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData: { email: string; password: string; name: string }, { rejectWithValue }) => {
    try {
      const response = await registerAPI(userData)
      localStorage.setItem('token', response.token)
      return response
    } catch (error: any) {
      return rejectWithValue(error.message || 'Ошибка при регистрации')
    }
  }
)

// Асинхронный thunk для получения текущего пользователя
export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('Нет токена авторизации')
    }
    
    try {
      const user = await getCurrentUserAPI(token)
      return { user, token }
    } catch (error: any) {
      localStorage.removeItem('token')
      return rejectWithValue(error.message || 'Ошибка при получении данных пользователя')
    }
  }
)

// Асинхронный thunk для логаута
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    localStorage.removeItem('token')
    return null
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    // Добавляем действие для установки роли (может понадобиться при инициализации)
    setRole: (state, action: PayloadAction<'student' | 'teacher' | 'admin'>) => {
      state.role = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.role = action.payload.user.role
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.role = action.payload.user.role
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      
      // Fetch Current User
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.role = action.payload.user.role
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
        state.isAuthenticated = false
        state.user = null
        state.token = null
        state.role = null
      })
      
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.isAuthenticated = false
        state.role = null
      })
  }
})

export const { clearError, setRole } = authSlice.actions
export default authSlice.reducer