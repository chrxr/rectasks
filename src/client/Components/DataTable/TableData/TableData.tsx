import React from 'react';
import taskData from '../../../Types/taskDataType';

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
      <tr key={task.id}>
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
