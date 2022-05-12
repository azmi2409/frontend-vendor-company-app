import { Col } from "react-bootstrap";
import { SidebarList } from "./SidebarList";

const Sidebar = () => {
  return (
    <Col
      className="vh-100 justify-content-center bg-primary py-5 d-flex sticky-md-top"
      xs={12}
      md={3}
      lg={2}
    >
      <SidebarList />
    </Col>
  );
};

export default Sidebar;
