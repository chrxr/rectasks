import axios from 'axios';
import taskData from '../../../Types/taskDataType';


const getDataHandler = (): Promise<taskData[]> => axios.get(process.env.DEV_URL)
  .then((res) => res.data)
  .catch((error) => error);

export default getDataHandler;
