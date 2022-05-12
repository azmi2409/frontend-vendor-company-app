import { useEffect } from "react";
import HomeComponent from "../components/Home";
import { Navigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home My EMS";
  }, []);
  return <Navigate to="/list" />;
};

export default Home;
