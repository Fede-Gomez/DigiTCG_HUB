import axios from "axios";
import { urlBase } from "../../constants/url";

const getAllCards = async () => {
  try {
    const resp = await axios.get(`${urlBase}/find`);
    return resp.data
  } catch (error) {
    throw error;
  }
}

const getCardsBt = async (bt: string) => {
  try {
    const resp = await axios.post(`${urlBase}/booster`, { bt });
    return resp.data
  } catch (error) {
    throw error;
  }
}
const getCardsSt = async (st: string) => {
  try {
    const resp = await axios.post(`${urlBase}/starter`, { st });
    return resp.data
  } catch (error) {
    throw error;
  }
}

const getCardsEx = async (ex: string) => {
  try {
    const resp = await axios.post(`${urlBase}/expansion`, { ex });
    return resp.data
  } catch (error) {
    throw error;
  }
}

const getCardsRb = async (rb: string) => {
  try {
    const resp = await axios.post(`${urlBase}/resurgence`, { rb });
    return resp.data
  } catch (error) {
    throw error;
  }
}

const getFilteredCards = async (filter: string) => {
  try {
    const resp = await axios.post(`${urlBase}/listFiltered`, { filter });
    return resp.data
  } catch (error) {
    throw error;
  }
}

export {
  getAllCards,
  getCardsBt,
  getCardsSt,
  getCardsEx,
  getCardsRb,
  getFilteredCards,
} 