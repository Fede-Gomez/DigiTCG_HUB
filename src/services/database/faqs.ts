import axios from "axios";
import { urlBase } from "../../constants/url";

const getAllQuestionAnswer = async ()=>{
    try {
        const resp = await axios.get(`${urlBase}/faqCartas`);
        return resp.data
      } catch (error) {
        throw error;
      }
}

const getAllErrataCards = async ()=>{
    try {
        const resp = await axios.get(`${urlBase}/faqErrataCards`);
        return resp.data
      } catch (error) {
        throw error;
      }
}

const getFlowChart = async ()=>{
    try {
        const resp = await axios.get(`${urlBase}/flowChart`);
        return resp.data
      } catch (error) {
        throw error;
      }
}

export{
    getAllQuestionAnswer,
    getAllErrataCards,
    getFlowChart,
}