import { Col } from "react-bootstrap";
import { SidebarList } from "./SidebarList";

const Sidebar = () => {
  return (
    <Col
      className="vh-100 justify-content-center bg-primary py-5 d-none d-md-flex sticky-top"
      md={3}
      lg={2}
    >
      <SidebarList />
    </Col>
  );
};

export default Sidebar;
