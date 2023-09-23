import { createSlice } from '@reduxjs/toolkit'
import { folderState } from '../interfaces';

const initialState: folderState = {
  folder:[]
};

export const folderReducer = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setFolders: (state, action) =>{
      state.folder = action.payload
    },
  },
})

export const { setFolders } = folderReducer.actions

export default folderReducer.reducer