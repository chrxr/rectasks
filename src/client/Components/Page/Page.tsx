import React, { useEffect, useState } from 'react';
import DataTable from '../DataTable/DataTable';
import TableData from '../DataTable/TableData/TableData';
import updateClickHandler from './Handlers/updateClickHandler';
import getDataHandler from './Handlers/getDataHandler';

const Page = () => {
  const [dataLoaded, setDataLoaded] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const useUpdateClickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const updatedJson = updateClickHandler(event, jsonData);
    setJsonData([...updatedJson]);
  };

  const useGetDataHandler = () => {
    getDataHandler(process.env.DEV_URL)
      .then((data) => {
        setJsonData(data);
        return data;
      })
      .then((data) => {
        setDataLoaded(data);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    useGetDataHandler();
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
