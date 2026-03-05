import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
// Пока не создаем другие слайсы, но оставляем место для них
// import hackingReducer from '@/features/hacking/hackingSlice'
// import aiReducer from '@/features/ai/aiSlice'
// import labsReducer from '@/features/labs/labsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // hacking: hackingReducer,
    // ai: aiReducer,
    // labs: labsReducer,
  },
  // Middleware для отладки (в production можно убрать)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch