import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface DataTableProps {
  children: ReactElement
}

export const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  background-color: white;
  margin: 0 auto;
  th, td {
    padding: 1em;
    border: 1px solid black;
  }
`;

const DataTable = ({ children }: DataTableProps) => (
  <StyledTable>
    <thead>
      <tr>
        <th>Name</th>
        <th>Last completed</th>
        <th>Expected frequency</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </StyledTable>
);

export default DataTable;
