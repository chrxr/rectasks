import axios from 'axios';
import taskData from '../../../Types/taskDataType';

const updateClickHandler = (
  event: React.MouseEvent<HTMLButtonElement>,
  jsonData: taskData[],
): taskData[] => {
  event.preventDefault();

  const jsonCopy = jsonData;
  const today = new Date().toISOString().slice(0, 10);
  const objectID = parseInt(event.currentTarget.name, 10);
  const data = jsonData.filter((obj:taskData) => obj.id === objectID)[0];
  const url = `http://localhost:8000/tasks/${data.id}/`;
  data.lastCompleted = today;

  axios.put(url, data)
    .then((res) => {
      if (res.status === 200) {
        jsonCopy.filter((obj:taskData) => obj.id === objectID)[0] = data;
        return jsonCopy;
      }
      return jsonData;
    })
    .catch((error) => error);
  return jsonData;
};

export default updateClickHandler;
