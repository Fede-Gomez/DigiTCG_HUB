import { useAppDispatch } from './useReducerHook'
import { cardPickedAdd, cardPickedRemove, setCards, setListFilterDigimon, setCardListFilter } from '../reducers/cardsReducer'
import { dataBaseDigimon } from '../firebase'
import { getFiltersCards } from '../firebase/dataBase'


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

  const getFilterCards = async (nameGame)=>{
    const filters = await getFiltersCards(nameGame)
    dispatch(setListFilterDigimon(filters.data()))
  }

  const removeFiltersNoChoiced = (cardFilters)=>{
    // remove filters empty because its not choiced
    let newFilters = {}
    Object.entries(cardFilters).forEach(([key, value]) => {
      if(value != 0){
        newFilters = {
          ...newFilters,
          [key]:value
        }
      }  
    });
    return newFilters;
  }
  
  const cardListFiltered = (filtChoiced)=>{
    const listFiltered = removeFiltersNoChoiced(filtChoiced)
    dispatch(setCardListFilter(listFiltered))
  }

  const addCards = (card)=>{
    dispatch(cardPickedAdd(card))
  }

  const removeCards = (card)=>{
    dispatch(cardPickedRemove(card))
  }

  const cardWished = (card)=>{
    dispatch(addCardToWished(card))
  }

  const cardSelling = (card)=>{
    dispatch(addCardToSelling(card))
  }

  return{
      loadAllCards,
      addCards,
      removeCards,
      getFilterCards,
      cardListFiltered,
      cardWished,
      cardSelling,
  }
}
