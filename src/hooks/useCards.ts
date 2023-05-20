import {useEffect, useState} from 'react'
import { useAppDispatch } from './useReducerHook'
import { setCards } from '../reducers/cardsReducer'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { dataBaseDigimon } from '../firebase/dataBase'


export const useCards = () => {
  const dispatch = useAppDispatch()
  let cartas = []
  
  const loadAllCards= async ()=>{
      const db = await dataBaseDigimon()
        db.forEach((doc) => {
            cartas.push({id:doc.id,data:doc.data()})
        });
        dispatch(setCards(cartas))
  }

  const addCards = ()=>{
    
  }
  return{
      loadAllCards
  }
}
