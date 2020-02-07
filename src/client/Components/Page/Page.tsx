import React, { useEffect, useState } from 'react';
import DataTable from '../DataTable/DataTable';

const Page = () => {
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
    <DataTable jsonData={jsonData} />
  );
};

export default Page;
