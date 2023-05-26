import { useAppDispatch, useAppSelector } from './useReducerHook';
import { userDeckUpdateDatabase } from '../firebase/dataBase';
import { setCardsPicked } from '../reducers/cardsReducer';
import { deleteDeckUser, setUser } from '../reducers/userReducer';
import { userDeckRemoveDatabase } from '../firebase/dataBase'

export const useDeck = () => {
    const user = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()

    const saveDeck = async (nombre: string,cards)=>{
        let updateDeckUser ={
            ...user,
            decks: {
              ...user.decks,
              [nombre]:cards
            }
        }
        await userDeckUpdateDatabase(user.idUser,updateDeckUser)
        dispatch(setUser(updateDeckUser))
    }

    const updateDeck =(cards)=>{
        dispatch(setCardsPicked(cards))
    }

    const deleteDeck = (deleteDeck)=>{
        delete user.decks[deleteDeck]
        dispatch(deleteDeckUser(user))
        userDeckRemoveDatabase(user)
    }
    return {
        saveDeck,
        updateDeck,
        deleteDeck,
    }
}