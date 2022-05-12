import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CompanyContext } from "../context/companyContext";
import { logoutAction } from "../stores/companyStores";

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CompanyContext);

  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
    navigate("/");
  }, []);

  return <div>Logout</div>;
};

export default Logout;
