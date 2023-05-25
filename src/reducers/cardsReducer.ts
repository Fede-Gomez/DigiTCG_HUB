import { createSlice } from '@reduxjs/toolkit'
import { CardsState } from '../interfaces';

const initialState: CardsState = {
  listCards:[],
  listFilterDigimon:[],
  listFilteredDigimon:[],
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

const removeFiltersNotUsing = (state, payload)=>{  
  let newFilters = {}
  Object.entries(payload).forEach(([key, value]) => {
    if(value != 0){
      newFilters = {
        ...newFilters,
        [key]:value
      }
    }  

  });
  console.log('asi salio el payload');
  console.log(payload);

  state.listFilteredDigimon = newFilters
}

const searchAndAddCardsOfFilter = (state, payload)=>{
  // console.log(payload);
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log('eso lo estoy viendo?');
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  
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
  // console.log('y por aca andamos en useReducer');

  
  // console.log(filteredCards);
  // console.log(state.listCardsFiltered);
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  
  
}

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) =>{
      state.listCards = action.payload;
    },
    setCardsPicked:(state, action)=>{
      state.listCardsPicked = action.payload
    },
    cardPickedAdd: (state, action)=>{
      incrementCountCard(state, action)
    },
    cardPickedRemove: (state, action)=>{
      decrementCountCard(state, action)
    },
    setListFilterDigimon:(state, action)=>{
      state.listFilterDigimon = action.payload
    },
    setListCardsFilter:(state, action)=>{
      removeFiltersNotUsing(state,action.payload)
    },
    setCardListFilter:(state, {payload})=>{
      searchAndAddCardsOfFilter(state, payload)
  },
}})

export const { setCards, setCardsPicked, cardPickedAdd, cardPickedRemove, setListFilterDigimon, setListCardsFilter, setCardListFilter } = cardsReducer.actions

export default cardsReducer.reducer