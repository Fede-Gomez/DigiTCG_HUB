import { useAppDispatch, useAppSelector } from './useReducerHook';
import { userDeckUpdateDatabase } from '../firebase/dataBase';
import { setCardsPicked } from '../reducers/cardsReducer';
import { deleteDeckUser, setUser } from '../reducers/userReducer';
import { userDeckRemoveDatabase } from '../firebase/dataBase'
import { ErrorMessage, SuccesMessage } from '../components';

export const useDeck = () => {
    const user = useAppSelector(state => state.user.profile)
    const dispatch = useAppDispatch()

    const saveDeck = async (msjSucces= '', msjError= '',nombre: string,cards)=>{
        let updateDeckUser ={
            ...user,
            decks: {
              ...user.decks,
              [nombre]:cards
            }
        }
        await userDeckUpdateDatabase(user.idUser,updateDeckUser)
            .then(()=>SuccesMessage(msjSucces != '' ? msjSucces : 'Se guardo el deck'))
            .catch(()=>ErrorMessage(msjError != '' ? msjError : 'Error al guardar deck'))
        dispatch(setUser(updateDeckUser))
    }
    const saveCardsPicked = async (cards)=>{
        let updateDeckUser ={
            ...user,
            cardsPicked: cards
        }
        await userDeckUpdateDatabase(user.idUser,updateDeckUser)
        dispatch(setUser(updateDeckUser))
    }
    const saveCardsBuy = async (cards)=>{
        let updateDeckUser ={
            ...user,
            cardsBuy: cards
        }
        await userDeckUpdateDatabase(user.idUser,updateDeckUser)
        dispatch(setUser(updateDeckUser))
    }
    const saveCardsSell = async (cards)=>{
        let updateDeckUser ={
            ...user,
            cardsSell: cards
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

    const changeNameDeck = (newName, oldName, content)=>{
        console.log(content);
        console.log(oldName);
        console.log(newName);
        delete user.decks[oldName]
        saveDeck('Se cambio el nombre', 'Error intente nuevamente', newName, content)
    }

    return {
        saveDeck,
        updateDeck,
        deleteDeck,
        saveCardsPicked,
        saveCardsBuy,
        saveCardsSell,
        changeNameDeck,
    }
}