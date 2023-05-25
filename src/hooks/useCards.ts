import { useAppDispatch } from './useReducerHook'
import { cardPickedAdd, cardPickedRemove, setCards, setListFilterDigimon, setListCardsFilter, setCardListFilter } from '../reducers/cardsReducer'
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

  const saveFilterCards = (cardFilters)=>{
    console.log('asi lo recibe cardFilter en useCard');
    console.log(cardFilters);
    
    
    dispatch(setListCardsFilter(cardFilters))
  }
  
  const cardListFiltered = (cardFilters)=>{
    dispatch(setCardListFilter(cardFilters))
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
      removeCards,
      getFilterCards,
      saveFilterCards,
      cardListFiltered,
  }
}
