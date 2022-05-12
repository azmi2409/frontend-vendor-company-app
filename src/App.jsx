import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content/Content";
import Create from "./components/Create/Create";
import List from "./components/List/List";
import ListModal from "./components/ListModal";
import Logout from "./routes/Logout";
import Protected from "./routes/Protected";
import Home from "./routes/Home";

const App = () => {
  return (
    <BrowserRouter>
      <ListModal />
      <Content>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/*Protect The Route*/}
          <Route element={<Protected />}>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/create" element={<Create />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </Content>
    </BrowserRouter>
  );
};

export default App;
