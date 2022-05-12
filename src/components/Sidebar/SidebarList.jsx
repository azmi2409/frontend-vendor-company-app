import { menu } from "./menu";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";

export const SidebarList = () => {
  return (
    <Container>
      <Navbar.Brand>
        <Link to="/">
          <h1 className="text-white fw-bold fs-2">My EMS</h1>
        </Link>
      </Navbar.Brand>
      <Nav className="flex-collumn gap-2" defaultActiveKey="/dashboard">
        {menu.map((item, index) => {
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
