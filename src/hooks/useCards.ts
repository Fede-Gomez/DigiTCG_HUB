import { useAppDispatch, useAppSelector } from './useReducerHook'
import { 
  setCards, 
  setAllCards,
  setListFilter, 
  setCardListFiltered, 
  cardPickedAdd, 
  cardPickedRemove, 
  addCardToWish,
  removeCardToWish, 
  addCardToSell,
  removeCardToSell,
  clearCardsView,
  clearCardsPicked,
  clearCardsWished,
  clearCardsSelling,
  setCardBuySellLogin,
} from '../reducers/cardsReducer'
import { getFilters, getCardsBt, getFilteredCards, getAllCards, getCardsEx, getCardsRb, getCardsSt, getCardsPromo } from '../services/database'
import { ErrorMessage } from '../components';
import Toast from 'react-native-toast-message';
import { TypeNavigation } from '../constants/typesNavigation';

const patternParaImportar =/^(\d+)\s+.*?(\w+-\d+)$/;
let cartaEncontrada;

export const useCards = () => {
  const allCards = useAppSelector(state => state.cards.fullListCards)
  const dispatch = useAppDispatch()

  const buscarCarta = (codigo:string)=>{
/*
Lo que hace codigoCorregido es agregarle un 0 si y solo si hay 1 solo digito entre st/bt/ex/rb
ej-> si me llega ST3-02 lo pasa a ST03-02
*/
  const codigoCorregido = codigo.replace(/(\D)(\d-\d+)/, (match, group1, group2) => {
    return group1 + "0" + group2;
  });
    return allCards.find(element => element.cardNumber == codigoCorregido);
  }

  const loadAllCards= async ()=>{
    const cards = await getAllCards();
    dispatch(setAllCards(cards))
  }
  
  const loadAllCardsPromo = async ()=>{
    const cards = await getCardsPromo();
    dispatch(setCards(cards))
  }

  const loadAllCardsBt = async (name: string)=>{
    const cards = await getCardsBt(name);
    dispatch(setCards(cards))
  }

  const loadAllCardsEx = async (name: string)=>{
    const cards = await getCardsEx(name);
    dispatch(setCards(cards))
  }

  const loadAllCardsRb = async (name: string)=>{
    const cards = await getCardsRb(name);
    dispatch(setCards(cards))
  }

  const loadAllCardsSt = async (name: string)=>{
    const cards = await getCardsSt(name);
    dispatch(setCards(cards))
  }

  const getListFiltersOfCards = async ()=>{
    const filters = await getFilters()
    dispatch(setListFilter(filters))
  }

  const clearListCardsView = ()=>{
    dispatch(clearCardsView())
  }

  const clearListCardsPicked = ()=>{
    dispatch(clearCardsPicked())
  }
  
  const clearListCardsWished = ()=>{
    dispatch(clearCardsWished())
  }
  
  const clearListCardsSelling = ()=>{
    dispatch(clearCardsSelling())
  }
  
  const cardListFiltered = async (filtChoiced: object)=>{
    const listFiltered = removeFiltersNoChoiced(filtChoiced)
    const getFilteredCard = await getFilteredCards(listFiltered)
    
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
    // remueve todos los filtros que tengan un array vacio
    for(let clave in cardFilters){
      if (Array.isArray(cardFilters[clave]) && cardFilters[clave].length === 0) {
          delete cardFilters[clave];
      }
    }
    // remueve todos los filtros que tengan null como valor
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

  const cardsImported = (cartas:string, deckCompraVenta:string)=>{
    cartas.split('\n').forEach((line) => {
        const match = line.trim().match(patternParaImportar);
        if (match) {
          const numero = match[1];
          const codigo = match[2];
          
          cartaEncontrada = buscarCarta(codigo)
          if(cartaEncontrada == undefined){
            Toast.show({
              type: 'error',
              text1: `No se encontro ${line.trim()}`
            });
          }else{
            console.log(deckCompraVenta);
            
            switch (deckCompraVenta) {
              case TypeNavigation.game.deckBuilder:
                for(let cont = 0; cont < parseInt(numero); cont++) addCards(cartaEncontrada)
                break;
              case TypeNavigation.game.cardsBuy:
                for(let cont = 0; cont < parseInt(numero); cont++) addCardWished(cartaEncontrada)
                break;
              case TypeNavigation.game.cardsSell:
                for(let cont = 0; cont < parseInt(numero); cont++) addCardSelling(cartaEncontrada)
                break;
            }
          }
        } else {
          if(line.trim().length != 0)
            ErrorMessage(`Formato invalido de ${line.trim()}`)
        } 
    });

  }
  
  const cardsImportedForBuy = (cartas:string)=>{

  }
  
  const cardsImportedForSell = (cartas:string)=>{

  }

  const setCardsBuySellAfterLogin = (user)=>{
    dispatch(setCardBuySellLogin(user))
  }

  return{
    loadAllCards,
    getListFiltersOfCards,
    loadAllCardsPromo,
    loadAllCardsBt,
    loadAllCardsEx,
    loadAllCardsSt,
    loadAllCardsRb,
    addCards,
    removeCards,
    addCardWished,
    removeCardWished,
    cardListFiltered,
    addCardSelling,
    removeCardSelling,
    clearListCardsPicked,
    clearListCardsView,
    clearListCardsWished,
    clearListCardsSelling,
    setCardsBuySellAfterLogin,
    cardsImported,
    cardsImportedForBuy,
    cardsImportedForSell,
  }
}
