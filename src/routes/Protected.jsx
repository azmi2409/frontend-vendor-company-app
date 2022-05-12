import { useContext } from "react";
import { CompanyContext } from "../context/companyContext";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { company } = useContext(CompanyContext);
  if (!company.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default Protected;
