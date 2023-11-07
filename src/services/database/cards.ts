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

const getCardsPromo = async () => {
  try {
    const resp = await axios.get(`${urlBase}/promo`);
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

const getFilteredCards = async (filter: object) => {
  try {
    const resp = await axios.post(`${urlBase}/listFiltered`, { filter });
    
    // esta condicion esta por si el resultado de los filtros puestos devuelve un [] (lo que significa que no hay coincidencia con los filtros que puso en el modal)
    if(resp.data.length == 0) return 0
    
    return resp.data
  } catch (error) {
    throw error;
  }
}

export {
  getAllCards,
  getCardsPromo,
  getCardsBt,
  getCardsSt,
  getCardsEx,
  getCardsRb,
  getFilteredCards,
} 