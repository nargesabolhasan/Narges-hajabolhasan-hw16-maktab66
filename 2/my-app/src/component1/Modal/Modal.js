import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
export const Modals = (props) => {
    
    return (
        <>
            <Modal show={props.show} onHide={()=>props.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


