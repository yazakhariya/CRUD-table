import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from 'src/modules/RegistrationForm/api/userSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  // редьюссер для доков
})

export type AppDispatch = typeof store.dispatch

export type rootState = ReturnType<typeof rootReducer>

export const store = configureStore({ reducer: rootReducer })
