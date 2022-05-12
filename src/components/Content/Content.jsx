import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { CompanyContext } from "../../context/companyContext";

const Content = ({ children }) => {
  const { company } = useContext(CompanyContext);
  const { isLoggedIn } = company;
  return (
    <Container fluid>
      <Row>
        {isLoggedIn && <Sidebar />}
        <Col className="d-flex justify-content-center py-5 px-2" gutter={2}>
          <Container>
            <Row>{children}</Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
