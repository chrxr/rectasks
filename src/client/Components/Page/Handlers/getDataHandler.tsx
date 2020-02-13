import axios from 'axios';
import taskData from '../../../Types/taskDataType';


const getDataHandler = (url: string): Promise<taskData[]> => axios.get(url)
  .then((res) => res.data)
  .catch((error) => error);

export default getDataHandler;
