import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';


function ModalWindow({show}) {
    
    // state variable
    const [show, setShow] = useState(false);


    // Functions to change state variable
    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);


    return (
        <div className="ModalWindow">
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>This is the modal Header Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is the modal Body</Modal.Body>
            </Modal>
        </div>
    );

}



export default ModalWindow;