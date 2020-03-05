import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../DataTable/DataTable';
import TableData from '../DataTable/TableData/TableData';
import updateClickHandler from './Handlers/updateClickHandler';

const Page = () => {
  const [dataLoaded, setDataLoaded] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const useUpdateClickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const updatedJson = updateClickHandler(event, jsonData);
    setJsonData([...updatedJson]);
  };

  useEffect(() => {
    axios.get(process.env.DEV_URL)
      .then((res) => {
        setJsonData(res.data);
        return res.data;
      })
      .then((data) => {
        setDataLoaded(data);
      })
      .catch((error) => error);
  }, []);

  if (dataLoaded === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <DataTable>
      <TableData jsonData={jsonData} updateClickHandler={useUpdateClickHandler} />
    </DataTable>
  );
};

export default Page;
