import React from 'react';
import './DeleteMovieModal.css';
import { Button, Modal } from 'react-bootstrap';

function DeleteMovieModal(props) {
    return (
        <Modal show={props.showDelete} onHide={props.handleDeleteClose}>
            <Modal.Header closeButton>
                <Modal.Title>DELETE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                delete!!!
        </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleDeleteClose}>DELETE</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteMovieModal;