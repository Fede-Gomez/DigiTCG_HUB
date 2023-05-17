import { createSlice } from '@reduxjs/toolkit'
import { CardsState } from '../interfaces';

const initialState: CardsState = {
  listCards:[]
};

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) =>{
      state.listCards = action.payload;
    },
  },
})

export const { setCards } = cardsReducer.actions

export default cardsReducer.reducer