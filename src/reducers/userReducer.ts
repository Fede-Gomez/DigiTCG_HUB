import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../interfaces';

const initialState: UserState = {
  user:[]
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) =>{
      state.user = action.payload
    },
  },
})

export const { setUser } = userReducer.actions

export default userReducer.reducer