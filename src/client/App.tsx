import React, { useEffect, useState } from 'react';

export interface taskData {
    name: string,
    lastCompleted: string,
    frequency: string,
    id: number,
}

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const handleDataLoading = () => {
    setDataLoaded(true);
  };

  const handleJsonData = (json: [taskData]) => {
    setJsonData(json);
  };

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
        handleJsonData(json);
      })
      .then(() => {
        handleDataLoading();
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

export default App;
