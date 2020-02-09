import React from 'react';
import taskData from '../../../Types/taskDataType';

// export const updateClickHandler = (task: taskData) => {
//   task.lastCompleted = new Date().toISOString().slice(0, 10); // SHOULD DO CONTEXT INSTEAD
//   const url = `http://localhost:8000/tasks/${task.id}/`;
//   fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((json) => {
//       setJsonData(json);
//     })
//     .then((json) => {
//       setDataLoaded(json);
//     });
// };

export interface TableDataProps {
  jsonData: taskData[],
  updateClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


const TableData = ({ jsonData, updateClickHandler }: TableDataProps) => {
  const dataTable = [];
  for (let i = 0; i < jsonData.length; i += 1) {
    const task = jsonData[i];
    const name = <td>{task.name}</td>;
    const lastCompleted = <td>{task.lastCompleted}</td>;
    const frequency = <td>{task.frequency}</td>;
    const update = <td><button name={task.id.toString()} type="button" onClick={updateClickHandler}>Update</button></td>;
    const row = (
      <tr>
        {name}
        {lastCompleted}
        {frequency}
        {update}
      </tr>
    );
    dataTable.push(row);
  }
  return <>{dataTable}</>;
};

export default TableData;
