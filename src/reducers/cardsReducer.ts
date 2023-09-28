import { createSlice } from '@reduxjs/toolkit'
import { initialStateCards } from '../interfaces';

const initialState = initialStateCards;

const incrementCountCard = (state, payload)=>{
  if (state.picked.find((card) => card.id === payload.id)) {    
    state.picked = state.picked.map((card) => {
        if (card.id === payload.id) {
          if (card.count === 4) {
            return card;
          } else {
            return { ...card, count: card.count + 1 };
          }
        }
        return card;
      });
    } else {
      state.picked.push({...payload, count: 1 });
    }
}

const decrementCountCard = (state, payload )=>{
  if (state.picked.find((card) => card.id === payload.id)) {
    state.picked = state.picked.map((card) => {
      if (card.id === payload.id) {
        if (card.count >= 1) {
          return { ...card, count: card.count - 1 };
        }
      }
      return card
    });
    state.picked = state.picked.filter(card => card.count != 0)
  }
  if (state.picked.length === 1 && state.picked[0] === undefined) {
    state.picked = [];
  }
}
const addCardToListWish = (state,payload) => {
  if (state.wished.find((card) => card.id === payload.id)) {
    state.wished = state.wished.map((card) => {
      if (card.id === payload.id) {
        if (card.count === 4) {
          return card;
        } else {
          return { ...card, count: card.count + 1 };
        }
      }
      return card;
    });
  } else {
    state.wished.push({...payload, count: 1 });
  }
}

const removeCardToListWish = (state,payload) => {
  if (state.wished.find((card) => card.id === payload.id)) {
    state.wished = state.wished.map((card) => {
      if (card.id === payload.id) {
        if (card.count >= 1) {
          return { ...card, count: card.count - 1 };
        }
      }
      return card
    });
    state.wished = state.wished.filter(card => card.count != 0)
  }
  if (state.wished.length === 1 && state.wished[0] === undefined) {
    state.wished = [];
  }
}

const addCardToListSelling = (state,payload) => {
  if (state.selling.find((card) => card.id === payload.id)) {
    state.selling = state.selling.map((card) => {
      if (card.id === payload.id) {
        if (card.count === 4) {
          return card;
        } else {
          return { ...card, count: card.count + 1 };
        }
      }
      return card;
    });
  } else {
    state.selling.push({...payload, count: 1 });
  }
}
const removeCardToListSelling = (state,payload) => {
  if (state.selling.find((card) => card.id === payload.id)) {
    state.selling = state.selling.map((card) => {
      if (card.id === payload.id) {
        if (card.count >= 1) {
          return { ...card, count: card.count - 1 };
        }
      }
      return card
    });
    state.selling = state.selling.filter(card => card.count != 0)
  }
  if (state.selling.length === 1 && state.selling[0] === undefined) {
    state.selling = [];
  }
}

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, {payload}) =>{
      state.view = payload;
    },
    setAllCards: (state, {payload}) =>{
      state.searched = payload;
    },
    clearCardsView:(state)=>{
      state.view = initialState.view
    },
    setListFilter:(state, {payload})=>{
      state.listFilter = payload;
    },
    setCardListFiltered:(state, {payload})=>{
      state.view = payload      
    },
    cardPickedAdd: (state, {payload})=>{
      incrementCountCard(state, payload);
    },
    cardPickedRemove: (state, {payload})=>{
      decrementCountCard(state, payload);
    },
    addCardToWish:(state, {payload})=>{
      addCardToListWish(state, payload);
    },
    removeCardToWish:(state,{payload})=>{
      removeCardToListWish(state,payload);
    },
    addCardToSell:(state, {payload})=>{
      addCardToListSelling(state,payload);
    },
    removeCardToSell:(state, {payload})=>{
      removeCardToListSelling(state,payload);
    },
    setCardsPicked:(state, {payload})=>{
      state.picked = payload;
    }
}})

export const { 
  setCards, 
  setAllCards,
  clearCardsView,
  setListFilter, 
  setCardListFiltered,  
  cardPickedAdd, 
  cardPickedRemove, 
  addCardToWish,  
  removeCardToWish,
  addCardToSell,
  removeCardToSell,
  setCardsPicked,
} = cardsReducer.actions

export default cardsReducer.reducer