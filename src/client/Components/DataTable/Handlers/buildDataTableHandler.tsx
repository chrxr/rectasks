import React from 'react';
import taskData from '../../../Types/taskDataType';

// export interface TableHandlerProps {
//   json: Array<taskData>,
//   // updateHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
// }

const buildDataTableHandler = (json: taskData[]) => {
  const dataTable = [];
  for (let i = 0; i < json.length; i += 1) {
    const task = json[i];
    const name = <td>{task.name}</td>;
    const lastCompleted = <td>{task.lastCompleted}</td>;
    const frequency = <td>{task.frequency}</td>;
    const update = <td><button name={task.id.toString()} type="button">Update</button></td>;
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
  return dataTable;
};

export default buildDataTableHandler;
