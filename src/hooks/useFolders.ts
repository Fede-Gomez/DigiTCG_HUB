import React from 'react'
import { useAppDispatch } from './useReducerHook'
import { getFolders } from '../services/database'
import { setFolders } from '../reducers/folderReducer'

export const useFolders = () => {
    const dispatch = useAppDispatch()
    const loadFolders = async ()=>{
        const folder = await getFolders()
        dispatch(setFolders(folder))
    }
    return {
        loadFolders,
    }
}
