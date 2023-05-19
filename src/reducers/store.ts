import { configureStore } from '@reduxjs/toolkit'
import { cardsReducer } from './cardsReducer'
import {userReducer} from './userReducer';

export const store = configureStore({
  reducer: {
    cards:cardsReducer.reducer,
    user: userReducer.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch