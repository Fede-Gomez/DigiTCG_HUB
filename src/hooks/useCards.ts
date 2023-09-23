import { useAppDispatch } from './useReducerHook'
import { 
  setCards, 
  setAllCards,
  setListFilter, 
  setCardListFiltered, 
  clearCardsView,
  cardPickedAdd, 
  cardPickedRemove, 
  addCardToWish,
  removeCardToWish, 
  addCardToSell,
  removeCardToSell,
} from '../reducers/cardsReducer'
import { getFilters, getCardsBt, getFilteredCards, getAllCards } from '../services/database'


export const useCards = () => {

  const dispatch = useAppDispatch()

  const loadAllCards= async ()=>{
    const cards = await getAllCards();
    dispatch(setAllCards(cards))
  }
  
  const loadAllCardsBt = async (name)=>{
    const cards = await getCardsBt(name);
    dispatch(setCards(cards))
  }

  const getListFiltersOfCards = async ()=>{
    const filters = await getFilters()
    dispatch(setListFilter(filters))
  }

  const clearListCardsView = ()=>{
    dispatch(clearCardsView())
  }
  
  const cardListFiltered = async (filtChoiced)=>{
    const listFiltered = removeFiltersNoChoiced(filtChoiced)
    const getFilteredCard = await getFilteredCards(listFiltered)
    console.log(getFilteredCard);
    
    dispatch(setCardListFiltered(getFilteredCard))
  }
  
  const addCards = (card)=>{
    dispatch(cardPickedAdd(card))
  }

  const addCardWished = (card)=>{
    dispatch(addCardToWish(card))
  }
  const removeCardWished = (card)=>{
    dispatch(removeCardToWish(card))
  }

  const removeCards = (card)=>{
    dispatch(cardPickedRemove(card))
  }

  const addCardSelling = (card)=>{
    dispatch(addCardToSell(card))
  }

  const removeCardSelling = (card)=>{
    dispatch(removeCardToSell(card))
  }


  const removeFiltersNoChoiced = (cardFilters)=>{
    // remove filters empty because its not choiced
    let newFilters = {}
    Object.entries(cardFilters).forEach(([key, value]) => {
      if(value != null){
        newFilters = {
          ...newFilters,
          [key]:value
        }
      }  
    });
    return newFilters;
  }

  return{
      clearListCardsView,
      loadAllCards,
      getListFiltersOfCards,
      loadAllCardsBt,
      addCards,
      removeCards,
      addCardWished,
      removeCardWished,
      cardListFiltered,
      addCardSelling,
      removeCardSelling
  }
}
