import React, { useEffect, useState } from 'react';
import buildDataTableHandler from './Handlers/buildDataTableHandler';

const DataTable = () => {
  const [dataLoaded, setDataLoaded] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  // const updateDate = (event: React.FormEvent<HTMLButtonElement>) => {
  //   console.log(event);
  //   // const now: Date = new Date();
  //   // console.log(Date.getFullYear(Date.now()));
  // };

  useEffect(() => {
    fetch('http://localhost:8000/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setJsonData(json);
      })
      .then((json) => {
        setDataLoaded(json);
      });
  }, []);

  if (dataLoaded === null) {
    return <h1>Loading...</h1>;
  }
  return (
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
};

export default DataTable;
