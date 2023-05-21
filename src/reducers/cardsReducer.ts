import { createSlice } from '@reduxjs/toolkit'
import { CardsState } from '../interfaces';

const initialState: CardsState = {
  listCards:[],
  listCardsPicked:[],
};

const incrementCountCard = (state, action)=>{
  if (state.listCardsPicked.find((card) => card.id === action.payload.id)) {
    state.listCardsPicked = state.listCardsPicked.map((card) => {
      if (card.id === action.payload.id) {
        if (card.count === 4) {
          return card;
        } else {
          return { ...card, count: card.count + 1 };
        }
      }
      return card;
    });
  } else {
    state.listCardsPicked.push({...action.payload, count: 1 });
  }
}

const decrementCountCard = (state, action)=>{
  console.log(state.listCardsPicked);
  
  if (state.listCardsPicked.find((card) => card.id === action.payload.id)) {
    state.listCardsPicked = state.listCardsPicked.map((card) => {
      if (card.id === action.payload.id) {
        if (card.count >= 1) {
          return { ...card, count: card.count - 1 };
        }
      }
      return card
    });
    state.listCardsPicked = state.listCardsPicked.filter(card => card.count != 0)
  }
  if (state.listCardsPicked.length === 1 && state.listCardsPicked[0] === undefined) {
    state.listCardsPicked = [];
  }
}

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) =>{
      state.listCards = action.payload;
    },
    cardPickedAdd: (state, action)=>{
      incrementCountCard(state, action)
    },
    cardPickedRemove: (state, action)=>{
      decrementCountCard(state, action)
    }
  },
})

export const { setCards, cardPickedAdd, cardPickedRemove } = cardsReducer.actions

export default cardsReducer.reducer