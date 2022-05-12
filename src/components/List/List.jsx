import { Col, Table } from "react-bootstrap";
import { tableHead } from "./TableHead";
import { useState, useEffect, useContext } from "react";
import {
  getAllAppointment,
  convertToLocale,
  getAppointmentById,
  getStatus,
} from "../../lib/helper";
import { CompanyContext } from "../../context/companyContext";
import { openAction } from "../../stores/listStores";

const List = () => {
  const [list, setList] = useState([]);
  const { dispatchList } = useContext(CompanyContext);

  useEffect(() => {
    getAllAppointment().then((res) => {
      setList(res);
    });
  }, []);

  const handleOpen = async (id) => {
    const data = await getAppointmentById(id);
    console.log(data);
    dispatchList(openAction(data));
  };

  return (
    <Col>
      <div className="d-flex justify-content-center">
        <h1>List Events</h1>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Table striped bordered hover responsive>
          <thead className="text-center">
            <tr>
              {tableHead.map((v) => (
                <th key={v}>{v}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list?.map((v, i) => (
              <tr className="text-center align-middle" key={v._id}>
                <td>{i + 1}</td>
                <td>
                  <span className="fw-bold text-capitalize">
                    {v.event_name}
                  </span>
                </td>
                <td>{v.vendor}</td>
                <td>
                  {v.confirmed_date ??
                    v.proposed_date.map((val) => (
                      <div key={val}>{convertToLocale(val)}</div>
                    ))}
                </td>
                <td>{getStatus(v.status)}</td>
                <td>{convertToLocale(v.date_created)}</td>
                <td>
                  <button
                    onClick={() => handleOpen(v._id)}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  );
};

export default List;
