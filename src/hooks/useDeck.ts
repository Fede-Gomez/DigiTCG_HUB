import { useAppDispatch, useAppSelector } from './useReducerHook';
import { userDeckDatabase } from '../firebase/dataBase';
import { setCardsPicked } from '../reducers/cardsReducer';

export const useDeck = () => {
    const user = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()

    const saveDeck = async (nombre: string,cards)=>{
        await userDeckDatabase(user.idUser, nombre, cards)
    }

    const updateDeck =(cards)=>{
        console.log('aca estamos en useDeck');
        console.log(cards);
        
        dispatch(setCardsPicked(cards))
    }

    return {
        saveDeck,
        updateDeck,
    }
}