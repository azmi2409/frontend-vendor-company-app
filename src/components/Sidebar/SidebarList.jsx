import { menu, menu2 } from "./menu";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CompanyContext } from "../../context/companyContext";
import React, { useContext, useEffect } from "react";

export const SidebarList = () => {
  const { company } = useContext(CompanyContext);
  const { type } = company;
  const list = type === "company" ? menu : menu2;
  return (
    <Container>
      <Navbar.Brand>
        <Link to="/">
          <h1 className="text-white fw-bold fs-2">My EMS</h1>
        </Link>
      </Navbar.Brand>
      <Nav
        className="flex-row flex-md-collumn gap-2"
        defaultActiveKey="/dashboard"
      >
        {list.map((item, index) => {
          return (
            <Nav.Item key={index}>
              <Link className="nav-link text-white" to={item.path}>
                {React.createElement(item.icon, {})} {item.title}
              </Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Container>
  );
};
export default SidebarList;
