import { Col, Row, Form, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { CompanyContext } from "../../context/companyContext";
import { getAllVendor, createAppointment } from "../../lib/helper";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { company, dispatch } = useContext(CompanyContext);

  if (!company.isLoggedIn && company.type !== "company") {
    navigate("/");
  }

  const [form, setForm] = useState({
    name: "",
    event_name: "",
    date1: "",
    date2: "",
    date3: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [vendor, setVendor] = useState([
    {
      event_name: "Loading...",
    },
  ]);

  useEffect(() => {
    getAllVendor().then((res) => {
      setVendor(res);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({
      ...form,
      name: company?.username,
    });
    const vendorID = vendor.findIndex((v) => v.event_name === form.event_name);
    const data = {
      vendor_id: vendor[vendorID]._id,
      vendor: vendor[vendorID].username,
      event_name: form.event_name,
      proposed_date: [form.date1, form.date2, form.date3],
      proposed_location: form.location,
    };
    const post = await createAppointment(data);
    navigate("/");
  };

  return (
    <Col>
      <div className="d-flex justify-content-center flex-collumn">
        <h1>Propose Event</h1>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Form onSubmit={handleSubmit} className="w-75">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicEmail" className="mb-3 ">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" disabled value={company?.username} />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicPassword" className="mb-3">
              <Form.Label>Event Dropdown</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="event_name"
                defaultValue="Choose..."
              >
                <option value="Choose..." disabled>
                  Choose...
                </option>
                {vendor.map((vendor) => (
                  <option key={vendor._id} value={vendor.event_name}>
                    {vendor.event_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>Proposed Date 1</Form.Label>
              <Form.Control
                name="date1"
                onChange={handleChange}
                type="date"
                placeholder="Enter Event Date"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>Proposed Date 2</Form.Label>
              <Form.Control
                name="date2"
                onChange={handleChange}
                type="date"
                placeholder="Enter Event Date"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>Proposed Date 3</Form.Label>
              <Form.Control
                name="date3"
                onChange={handleChange}
                type="date"
                placeholder="Enter Event Date"
              />
            </Form.Group>
          </Row>
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              name="location"
              onChange={handleChange}
              type="text"
              placeholder="Enter Event Location"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Col>
  );
};

export default Create;
