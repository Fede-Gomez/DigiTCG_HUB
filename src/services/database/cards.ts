import axios from "axios";

const getAllCards = async () => {
  try {
    const resp = await axios.get(`http://10.0.2.2:3000/find`);
    return resp.data
  } catch (error) {
    throw error;
  }
}

const getCardsBt = async (bt: string) => {
  try {
    const resp = await axios.post(`http://10.0.2.2:3000/booster`, { bt });
    return resp.data
  } catch (error) {
    throw error;
  }
}

const getFilteredCards = async (filter) => {
  try {
    const resp = await axios.post(`http://10.0.2.2:3000/listFiltered`, { filter });
    return resp.data
  } catch (error) {
    throw error;
  }
}

export {
  getAllCards,
  getCardsBt,
  getFilteredCards
} 