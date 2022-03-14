import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
export const Modals = (props) => {
    const { handleShow, handleClose, show ,massages} = props
    return (
        <>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{massages}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


