import { useAppDispatch } from './useReducerHook'
import { cardPickedAdd, cardPickedRemove, setCards } from '../reducers/cardsReducer'
import { dataBaseDigimon } from '../firebase'


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

  const addCards = (card)=>{
    dispatch(cardPickedAdd(card))
  }

  const removeCards = (card)=>{
    dispatch(cardPickedRemove(card))
  }
  return{
      loadAllCards,
      addCards,
      removeCards
  }
}
