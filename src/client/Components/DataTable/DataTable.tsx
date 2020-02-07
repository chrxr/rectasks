import React from 'react';
import buildDataTableHandler from './Handlers/buildDataTableHandler';
import taskData from '../../Types/taskDataType';

export interface DataTableProps {
  jsonData: taskData[]
}

const DataTable = ({ jsonData }: DataTableProps) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Last completed</th>
        <th>Expected frequency</th>
        <th>Update</th>
      </tr>
    </thead>
    {buildDataTableHandler(jsonData)}
  </table>
);

export default DataTable;
