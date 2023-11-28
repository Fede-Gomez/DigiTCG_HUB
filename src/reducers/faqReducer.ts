import { createSlice } from '@reduxjs/toolkit'
import { faqState } from '../interfaces';
import { TypeNavigation } from '../constants/typesNavigation';

const initialState: faqState = {
  errata:[],
  flow:[],
  qa:[],
};

export const appReducer = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setQA:(state, action)=>{
        state.qa = action.payload
    },
    setErrataCards:(state, action)=>{
        state.errata = action.payload
    },
    setFlowChart:(state, action)=>{
        state.flow = action.payload
    }
  },
})

export const { setQA, setErrataCards, setFlowChart } = appReducer.actions

export default appReducer.reducer