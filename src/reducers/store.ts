import { configureStore } from '@reduxjs/toolkit'
import { cardsReducer } from './cardsReducer'
import { userReducer } from './userReducer';
import { folderReducer } from './folderReducer';
import { appReducer } from './appReducer';

export const store = configureStore({
  reducer: {
    cards: cardsReducer.reducer,
    user: userReducer.reducer,
    folder: folderReducer.reducer,
    app: appReducer.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch