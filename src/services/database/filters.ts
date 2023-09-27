import axios from "axios";
import { urlBase } from "../../constants/url";

const getFilters = async () => {
    try {
        const resp = await axios.get(`${urlBase}/filters`);
        return resp.data
    } catch (error) {
      
    }
}

export default getFilters