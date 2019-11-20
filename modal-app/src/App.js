import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import ModalWindow from './ModalWindow';



function App() {

  // state variable
  const [show, setShow] = useState(false);


  // Functions that can change the state variable
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="App">
      {/* the Button that opens the modal window */}
      <Button variant="primary" onClick={handleShow}>
        Click Me!
      </Button>

      <ModalWindow show={show}/>
      
      
    </div>
  );
}

export default App;





{/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the body of the modal window</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal> */}