import React from 'react';

export interface taskData {
  name: string,
  lastCompleted: string,
  frequency: string,
  id: number,
}

export interface TableHandlerProps {
  json: Array<taskData>,
  updateHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const buildDataTableHandler = ({ json, updateHandler }: TableHandlerProps) => {
  const dataTable = [];
  for (let i = 0; i < json.length; i += 1) {
    const name = <td>{json[i].name}</td>;
    const lastCompleted = <td>{json[i].lastCompleted}</td>;
    const frequency = <td>{json[i].frequency}</td>;
    const update = <td><button name={json[i].id.toString()} type="button" onClick={updateHandler}>Update</button></td>;
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
