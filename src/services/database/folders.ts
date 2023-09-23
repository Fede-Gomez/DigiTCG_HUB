import axios from "axios";
const getFolders = async () =>{
  try {
      const resp = await axios.get('http://10.0.2.2:3000/folders');
      return resp.data
  } catch (error) {
    
  }
}

export default getFolders