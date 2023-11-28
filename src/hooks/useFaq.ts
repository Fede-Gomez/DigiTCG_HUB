import { useAppDispatch } from './useReducerHook'
import { getAllErrataCards, getAllQuestionAnswer, getFlowChart } from '../services/database'
import { setErrataCards, setFlowChart, setQA } from '../reducers/faqReducer';

export const useFaq = ()=>{
    const dispatch = useAppDispatch();
    const setQuestionAnswers = async ()=>{
        const qa = await getAllQuestionAnswer();
        dispatch(setQA(qa))
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
    }
}