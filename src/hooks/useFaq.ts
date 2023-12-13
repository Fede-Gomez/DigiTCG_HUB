import { useAppDispatch } from './useReducerHook'
import { getAllErrataCards, getAllQuestionAnswer, getFlowChart, getAllDateFaqsUpdate } from '../services/database'
import { setErrataCards, setFlowChart, setQA, setDateQAUpdate } from '../reducers/faqReducer';

export const useFaq = ()=>{
    const dispatch = useAppDispatch();
    const setQuestionAnswers = async ()=>{
        const qa = await getAllQuestionAnswer();
        dispatch(setQA(qa))
    }
    
    const setAllDateFaqsUpdate = async ()=>{
        const qa = await getAllDateFaqsUpdate();
        dispatch(setDateQAUpdate(qa))
    }
    const setAllErrataCards = async ()=>{
        const errata = await getAllErrataCards();
        dispatch(setErrataCards(errata))
    }
    const setAttackFlowChart = async ()=>{
        const flow = await getFlowChart();
        dispatch(setFlowChart(flow))
    }
    return{
        setQuestionAnswers,
        setAllErrataCards,
        setAttackFlowChart,
        setAllDateFaqsUpdate,
    }
}