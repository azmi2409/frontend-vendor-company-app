import { convertToLocale, getStatus } from "../../lib/helper";
import { Table } from "react-bootstrap";

const ListTable = ({ data }) => {
  return (
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
        <tr>
          <th>Date Created</th>
          <td>{convertToLocale(data.date_created)}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListTable;
