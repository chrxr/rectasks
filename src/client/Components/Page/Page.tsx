import React, { useEffect, useState } from 'react';
import DataTable from '../DataTable/DataTable';
import TableData from '../DataTable/TableData/TableData';

const Page = () => {
  // let jsonData: taskData;
  const [dataLoaded, setDataLoaded] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  // const updateDate = (event: React.FormEvent<HTMLButtonElement>) => {
  //   console.log(event);
  //   // const now: Date = new Date();
  //   // console.log(Date.getFullYear(Date.now()));
  // };

  const updateClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log(event.currentTarget.name);
  };

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
    <DataTable>
      <TableData jsonData={jsonData} updateClickHandler={updateClickHandler} />
    </DataTable>
  );
};

export default Page;
