import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { rejectAppointment } from "../../lib/helper";

const Reject = ({ data, close }) => {
  const [reason, setReason] = useState("");

  const handleChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = async () => {
    const res = await rejectAppointment(data._id, reason);
    console.log(res);
    setReason("");
    close();
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Reason</Form.Label>
          <Form.Control onChange={handleChange} as="textarea" rows="3" />
        </Form.Group>
      </Form>
      <Modal.Footer>
        <Button onClick={handleSubmit} variant="danger">
          Reject
        </Button>
        <Button onClick={close} variant="secondary">
          Cancel
        </Button>
      </Modal.Footer>
    </>
  );
};

export default Reject;
