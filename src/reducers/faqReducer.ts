import { createSlice } from '@reduxjs/toolkit'
import { faqState } from '../interfaces';

const initialState: faqState = {
  errata:[],
  flow:[],
  qa:[],
};

export const faqReducer = createSlice({
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

export const { setQA, setErrataCards, setFlowChart } = faqReducer.actions

export default faqReducer.reducer