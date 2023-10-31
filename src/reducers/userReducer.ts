import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../interfaces';

const initialState: UserState = {
  profile:[]
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) =>{
      state.profile = action.payload
    },
    saveDeckUser: (state, action) =>{
      state.profile.decks = action.payload 
    },
    deleteDeckUser: (state, action)=>{
      state.profile = action.payload
    }
  },
})

export const { setUser, saveDeckUser,deleteDeckUser } = userReducer.actions

export default userReducer.reducer