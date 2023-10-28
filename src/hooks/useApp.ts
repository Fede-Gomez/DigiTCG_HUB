import { useAppDispatch } from './useReducerHook'
import { setModalCardVisible, setModalFilterVisible, setModalCardView, setFlipedCard } from '../reducers/appReducer'

export const useApp = () => {
    const dispatch = useAppDispatch()

    const setModalFilter = (visible:boolean)=>{
        dispatch(setModalFilterVisible(visible))
    }
    
    const setModalCard = (visible:boolean)=>{
        dispatch(setModalCardVisible(visible))
    }
    
    const setModalCardInfo = (card:object)=>{
        dispatch(setModalCardView(card))
    }

    const setFlipCard = (flip:boolean)=>{
        dispatch(setFlipedCard(flip))
    }


    return {
        setModalFilter,
        setModalCard,
        setModalCardInfo,
        setFlipCard,
    }
}
