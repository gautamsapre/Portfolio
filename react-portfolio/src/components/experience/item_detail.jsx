import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

function MyVerticallyCenteredModal(props) {
    return (
    <div className="test">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title className="test" id="contained-modal-title-vcenter">
            Title
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="test">
          <p>
            Temp description
          </p>
        </Modal.Body>
        <Modal.Footer>
            <Button className="test" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
  
  function DisplayModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Details
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  
  export default DisplayModal;