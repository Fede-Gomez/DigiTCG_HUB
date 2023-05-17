import {useEffect, useState} from 'react'
import { useAppDispatch } from './useReducerHook'
import { setCards } from '../reducers/cardsReducer'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

let cartas = []

export const useCards = () => {
    const dispatch = useAppDispatch()

  const loadAllCards= async ()=>{
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "cardsDigimon"));
        querySnapshot.forEach((doc) => {
            cartas.push({id:doc.id,data:doc.data()})
        });
        dispatch(setCards(cartas))
  }

    useEffect(() => {
        loadAllCards();
    }, [])

}
