import { createSlice } from '@reduxjs/toolkit'
import { CardsState } from '../interfaces';

const initialState: CardsState = {
  listCards:[],
  listFilter:[],
  listCardsPicked:[],
  listCardsFiltered:[],
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

const filterCardList = (state, payload)=>{
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

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, {payload}) =>{
      state.listCards = payload;
    },
    setCardsPicked:(state, {payload})=>{
      state.listCardsPicked = payload
    },
    cardPickedAdd: (state, action)=>{
      incrementCountCard(state, action)
    },
    cardPickedRemove: (state, action)=>{
      decrementCountCard(state, action)
    },
    setListFilterDigimon:(state, {payload})=>{
      state.listFilter = payload
    },
    setCardListFilter:(state, {payload})=>{
      filterCardList(state, payload)
  },
}})

export const { setCards, setCardsPicked, cardPickedAdd, cardPickedRemove, setListFilterDigimon, setListCardsFilter, setCardListFilter } = cardsReducer.actions

export default cardsReducer.reducer