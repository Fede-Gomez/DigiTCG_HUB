import { createSlice } from '@reduxjs/toolkit'
import { faqState } from '../interfaces';

const initialState: faqState = {
  errata:[],
  flow:[],
  qa:[],
  dateQaUpdate:[]
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
    },
    setDateQAUpdate: (state, action)=>{
      state.dateQaUpdate = action.payload
    }
  },
})

export const { setQA, setErrataCards, setFlowChart, setDateQAUpdate } = faqReducer.actions

export default faqReducer.reducer