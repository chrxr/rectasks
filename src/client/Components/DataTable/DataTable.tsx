import React, { ReactElement } from 'react';

export interface DataTableProps {
  children: ReactElement
}

const DataTable = ({ children }: DataTableProps) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Last completed</th>
        <th>Expected frequency</th>
        <th>Update</th>
      </tr>
    </thead>
    {children}
  </table>
);

export default DataTable;
