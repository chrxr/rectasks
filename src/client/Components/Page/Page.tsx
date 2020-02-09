import React, { useEffect, useState } from 'react';
import DataTable from '../DataTable/DataTable';
import TableData from '../DataTable/TableData/TableData';
import taskData from '../../Types/taskDataType';

const Page = () => {
  const [dataLoaded, setDataLoaded] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const updateClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const jsonCopy = jsonData;
    const today = new Date().toISOString().slice(0, 10);
    const objectID = parseInt(event.currentTarget.name, 10);
    let data = jsonData.filter((obj:taskData) => obj.id === objectID)[0];
    const url = `http://localhost:8000/tasks/${data.id}/`;
    data.lastCompleted = today;
    data = JSON.stringify(data);
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((res) => {
        if (res.status === 200) {
          setJsonData([...jsonCopy]);
        }
      });
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
