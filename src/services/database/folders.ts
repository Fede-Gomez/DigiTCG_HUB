import axios from "axios";
import { urlBase } from "../../constants/url";

const getFolders = async () =>{
  try {
      const resp = await axios.get(`${urlBase}/folders`);
      return resp.data
  } catch (error) {
    
  }
}

export default getFolders