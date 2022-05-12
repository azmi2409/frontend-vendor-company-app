import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Table } from "react-bootstrap";
import { CompanyContext } from "../../context/companyContext";
import { openAction, closeAction } from "../../stores/listStores";
import { convertToLocale, getStatus } from "../../lib/helper";

export default function ListModal() {
  const { list, dispatchList, company } = useContext(CompanyContext);
  const { isOpen, data } = list;
  const handleClose = () => dispatchList(closeAction());
  return (
    <>
      <Modal show={isOpen} onHide={handleClose} size={"lg"} centered>
        <Modal.Header closeButton>
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <tbody>
              <tr>
                <th>Event Name</th>
                <td>
                  <span className="fw-bold">{data.event_name}</span>
                </td>
              </tr>
              <tr>
                <th>Vendor</th>
                <td>{data.vendor}</td>
              </tr>
              <tr>
                <th>Event Status</th>
                <td>{getStatus(data.status)}</td>
              </tr>
              {data.status === "confirmed" && (
                <tr>
                  <th>Confirmed Date</th>
                  <td>{convertToLocale(data.confirmed_date)}</td>
                </tr>
              )}
              {data.status === "pending" && (
                <tr>
                  <th>Proposed Date</th>
                  <td>
                    {data.proposed_date.map((v) => (
                      <span key={v}>
                        {convertToLocale(v)}
                        <br />
                      </span>
                    ))}
                  </td>
                </tr>
              )}
              <tr>
                <th>Location</th>
                <td>{data.proposed_location}</td>
              </tr>
              {data.status === "rejected" && (
                <tr>
                  <th>Rejected Reason</th>
                  <td>{data.remarks}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Modal.Body>
        {company.type === "vendor" && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}
