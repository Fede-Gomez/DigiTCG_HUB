import { createSlice } from '@reduxjs/toolkit'
import { folderState } from '../interfaces';

const initialState: folderState = {
  folders:[]
};

export const folderReducer = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setFolders: (state, action) =>{
      state.folders = action.payload
    },
  },
})

export const { setFolders } = folderReducer.actions

export default folderReducer.reducer