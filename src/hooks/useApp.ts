import { useAppDispatch } from './useReducerHook'
import { setModalCardVisible, setModalFilterVisible, setModalCardView, setFlipedCard, setBuilderWishedSelling, setMessageHelp } from '../reducers/appReducer'

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

    const setBuildWishSell = (actionCard:string)=>{
        dispatch(setBuilderWishedSelling(actionCard));
    }

    const setMsjHelp = (msj:Array<string>)=>{
        dispatch(setMessageHelp(msj));
    }

    return {
        setModalFilter,
        setModalCard,
        setModalCardInfo,
        setFlipCard,
        setBuildWishSell,
        setMsjHelp,
    }
}
