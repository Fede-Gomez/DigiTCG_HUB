import { configureStore } from '@reduxjs/toolkit'
import { cardsReducer } from './cardsReducer'
import { userReducer } from './userReducer';
import { folderReducer } from './folderReducer';
import { appReducer } from './appReducer';
import {faqReducer} from './faqReducer';

export const store = configureStore({
  reducer: {
    cards: cardsReducer.reducer,
    user: userReducer.reducer,
    folder: folderReducer.reducer,
    app: appReducer.reducer,
    faq: faqReducer.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch