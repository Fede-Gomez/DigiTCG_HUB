import { createSlice } from '@reduxjs/toolkit'
import { appState } from '../interfaces';

const initialState: appState = {
  modalFilterVisible: false,
  modalCardVisible: false,
  flipedCard: true,
  modalCardView:{}
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
  },
})

export const { setModalFilterVisible, setModalCardVisible, setModalCardView, setFlipedCard } = appReducer.actions

export default appReducer.reducer