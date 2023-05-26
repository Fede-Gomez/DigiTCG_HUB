import { createSlice } from '@reduxjs/toolkit'
import { CardsState } from '../interfaces';

const initialState: CardsState = {
  listCards:[],
  listFilter:[],
  listCardsPicked:[],
  listCardsFiltered:[],
  listCardsWished:[],
  listCardsSelling:[],
};

const incrementCountCard = (state, payload)=>{
 console.log(payload);
 
  if (state.listCardsPicked.find((card) => card.id === payload.id)) {
    state.listCardsPicked = state.listCardsPicked.map((card) => {
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
    state.listCardsPicked.push({...payload, count: 1 });
  }
}

const decrementCountCard = (state, payload )=>{
  if (state.listCardsPicked.find((card) => card.id === payload.id)) {
    state.listCardsPicked = state.listCardsPicked.map((card) => {
      if (card.id === payload.id) {
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

  const filterCardList = (state, payload) => {
    const filteredCards = state.listCards.filter((card) => {
      const { data } = card;
      for (const key in payload) {
        const filterValues = payload[key];
        if (filterValues && filterValues.length > 0) {
          if (!filterValues.includes(data[key])) {
            return false;
          }
        }
      }
      return true;
    })
    state.listCardsFiltered = filteredCards
  }

  const addCardToListWish = (state,payload) => {
    if (state.listCardsWished.find((card) => card.id === payload.id)) {
      state.listCardsWished = state.listCardsWished.map((card) => {
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
      state.listCardsWished.push({...payload, count: 1 });
    }
  }

  const removeCardToListWish = (state,payload) => {
    if (state.listCardsWished.find((card) => card.id === payload.id)) {
      state.listCardsWished = state.listCardsWished.map((card) => {
        if (card.id === payload.id) {
          if (card.count >= 1) {
            return { ...card, count: card.count - 1 };
          }
        }
        return card
      });
      state.listCardsWished = state.listCardsWished.filter(card => card.count != 0)
    }
    if (state.listCardsWished.length === 1 && state.listCardsWished[0] === undefined) {
      state.listCardsWished = [];
    }
  }

  const addCardToListSelling = (state,payload) => {

  }

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, {payload}) =>{
      state.listCards = payload;
    },
    setCardsPicked:(state, {payload})=>{
      state.listCardsPicked = payload;
    },
    cardPickedAdd: (state, {payload})=>{
      incrementCountCard(state, payload);
    },
    cardPickedRemove: (state, {payload})=>{
      decrementCountCard(state, payload);
    },
    setListFilterDigimon:(state, {payload})=>{
      state.listFilter = payload;
    },
    setCardListFilter:(state, {payload})=>{
      filterCardList(state, payload);
    },
    addCardToWished:(state, {payload})=>{
      addCardToListWish(state,payload);
    },
    removeCardToWished:(state,{payload})=>{
      removeCardToListWish(state,payload);
    },
    addCardToSelling:(state, {payload})=>{
      addCardToListSelling(state,payload);
    },
}})

export const { 
  setCards, 
  setCardsPicked, 
  cardPickedAdd, 
  cardPickedRemove, 
  setListFilterDigimon, 
  setCardListFilter, 
  addCardToWished,  
  removeCardToWished,

} = cardsReducer.actions

export default cardsReducer.reducer