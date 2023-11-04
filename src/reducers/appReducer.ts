import { createSlice } from '@reduxjs/toolkit'
import { appState } from '../interfaces';
import { TypeNavigation } from '../constants/typesNavigation';

const initialState: appState = {
  modalFilterVisible: false,
  modalCardVisible: false,
  flipedCard: true,
  modalCardView:{},
  builderWishedSelling: TypeNavigation.game.deckBuilder
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModalFilterVisible: (state, action) =>{
      state.modalFilterVisible = action.payload
    },
    setModalCardVisible: (state, action) =>{
      state.modalCardVisible = action.payload
    },
    setModalCardView: (state, action) =>{
      state.modalCardView = action.payload
    },
    setFlipedCard: (state, action) =>{
      state.flipedCard = action.payload
    },
    setBuilderWishedSelling: (state, action)=>{
      state.builderWishedSelling = action.payload
    }
  },
})

export const { setModalFilterVisible, setModalCardVisible, setModalCardView, setFlipedCard, setBuilderWishedSelling } = appReducer.actions

export default appReducer.reducer