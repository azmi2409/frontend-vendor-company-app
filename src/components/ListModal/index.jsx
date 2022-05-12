import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { CompanyContext } from "../../context/companyContext";
import { closeAction } from "../../stores/listStores";
import Confirm from "./Confirm";
import Reject from "./Reject";
import ListTable from "./Table";

export default function ListModal() {
  const [showState, setShowState] = useState(1);
  const { list, dispatchList, company, setRefetch } =
    useContext(CompanyContext);
  const { isOpen, data } = list;
  const handleClose = () => {
    setShowState(1);
    dispatchList(closeAction());
    setRefetch(true);
  };

  const switchBodyView = () => {
    switch (showState) {
      case 1:
        return <ListTable data={data} />;
      case 2:
        return <Confirm data={data} close={handleClose} />;
      case 3:
        return <Reject data={data} close={handleClose} />;
      default:
        return <ListTable data={data} />;
    }
  };

  const openConfirm = () => {
    setShowState(2);
  };

  const openReject = () => {
    setShowState(3);
  };

  return (
    <>
      <Modal show={isOpen} onHide={handleClose} size={"lg"} centered>
        <Modal.Header closeButton>
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{switchBodyView()}</Modal.Body>
        {company.type === "vendor" &&
          data.status === "pending" &&
          showState === 1 && (
            <Modal.Footer>
              <Button variant="primary" onClick={openConfirm}>
                Confirm
              </Button>
              <Button variant="danger" onClick={openReject}>
                Reject
              </Button>
            </Modal.Footer>
          )}
      </Modal>
    </>
  );
}
