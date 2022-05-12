import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { convertToLocale } from "../../lib/helper";
import { confirmAppointment } from "../../lib/helper";

const Confirm = ({ data, close }) => {
  const [selectedDate, setSelectedDate] = useState(" ");
  const date = data.proposed_date;

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const confirmation = async () => {
    const id = data._id;
    const date = selectedDate;
    console.log(date);
    const response = await confirmAppointment(id, date);
    console.log(response);
    close();
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Confirmed Date</Form.Label>
          <Form.Select
            name="confirmed_date"
            onChange={handleChange}
            value={selectedDate}
          >
            <option disabled value="">
              Select Date
            </option>
            {date.map((v) => (
              <option key={v} value={v}>
                {convertToLocale(v)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      <Modal.Footer>
        <Button onClick={confirmation} variant="primary">
          Confirm
        </Button>
        <Button onClick={close} variant="secondary">
          Cancel
        </Button>
      </Modal.Footer>
    </>
  );
};

export default Confirm;
