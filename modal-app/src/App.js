import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';


/*
 * 
 * 1) The state variable 'show' is used to determine the visibility of the modal window. 
 *    state.show is set to false by default. it can be changed by using one of the 2 functions,
 *    'handleClose' or 'handleShow'.
 * 
 * 2) The <Button>Click Me!</Button> element has an onClick attribute that will set state.show to true,
 *    triggering the Modal window to open. The <Modal> element has a show attribute set to the state.show, 
 *    this is how the Modal window knows when to open. 
 * 
 * 3) The <Modal> element also has a onHide attribute set to 'handleClose'. Whenever the handleClose function is ran,
 *    the modal window knows to close. The two buttons in Modal.Footer have onClick attributes set to handleClose. When
 *    these buttons are pressed, the modal window will close.
 * 
 */
function App() {
  //-- MODAL STATE VARIABLE AND FUNCTIONS FOR ALTERING STATE VARIABLE --//
  // state variable
  const [show, setShow] = useState(false);
  // Functions that can change the state variable
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


// Step One: Add an array of objects to be presented in modal window.

let family = [
  {
    'name':'Yogi',
    'familyMember':'Father',
    'job':'Publix'
  },
  {
    'name':'Beth',
    'familyMember':'Mother',
    'job':'School Board'
  },
  {
    'name':'Justin',
    'familyMember':'Sibling',
    'job':'Outback'
  },
  {
    'name':'Matt',
    'familyMember':'Sibling',
    'job':'HVAC'
  },
  {
    'name':'Aurora',
    'familyMember':'Matt\'s daughter',
    'job':'Being cute'
  }
];

function familyMap(){ 
  family.map(member => {
    console.log(member.name);
    console.log(member.familyMember);
    console.log(member.job);
  });
}
familyMap();

  return (
    <div className="App">

      {/* the Button that opens the modal window */}
      <Button variant="primary" onClick={handleShow}>
        Click Me!
      </Button>



      {/* MODAL WINDOW */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This is my family</Modal.Title>
        </Modal.Header>
        {/* Step Two: Map the props variable 'family' and present it in the body of the Modal window. 
            The browser console shows an error for map: Each child should have a unique 'key' prop. 
            Not a big deal. Doesnt break the app.    
        */}
        <Modal.Body>
          {family.map(member => (
          <div>
            <p>Name: {member.name}</p>
            <p>Family position: {member.familyMember}</p>
            <p>Job: {member.job}</p>
          </div>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

