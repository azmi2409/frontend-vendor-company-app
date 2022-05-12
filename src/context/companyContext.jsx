import { createContext, useEffect, useReducer, useState } from "react";
import { companyStores, initialState } from "../stores/companyStores";
import { loginAction } from "../stores/companyStores";
import listStores from "../stores/listStores";
import { listState } from "../stores/listStores";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [company, dispatch] = useReducer(companyStores, initialState);
  const [list, dispatchList] = useReducer(listStores, listState);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token")) || "";
    if (data.token) {
      dispatch(loginAction(data));
    }
  }, []);

  //Company Reducer
  return (
    <CompanyContext.Provider
      value={{
        company,
        dispatch,
        list,
        dispatchList,
        refetch,
        setRefetch,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
