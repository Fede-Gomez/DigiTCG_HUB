import axios from "axios";

const getFilters = async () => {
    try {
        const resp = await axios.get('http://10.0.2.2:3000/filters');
        return resp.data
    } catch (error) {
      
    }
}

export default getFilters