import { Col } from "react-bootstrap";
import { SidebarList } from "./SidebarList";
import HeaderList from "./HeaderList";

const Sidebar = () => {
  return (
    <Col
      className="justify-content-center bg-primary py-5 d-flex sticky-md-top"
      xs={12}
      md={3}
      lg={2}
    >
      <HeaderList />
      <SidebarList />
    </Col>
  );
};

export default Sidebar;
