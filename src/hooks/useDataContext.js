import React, { createContext, useContext } from "react";
import { chartData } from "../utils/chartData.utils";
import { tableData } from "../utils/tableData.utils";

// Create the context
const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
  const data = {
    chartData,
    tableData,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// Custom hook to use the data context
export const useDataContext = () => {
  return useContext(DataContext);
};
