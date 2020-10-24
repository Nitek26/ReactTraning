import React from 'react';
import './DeleteMovieModal.css';
import { Button, Modal } from 'react-bootstrap';

function DeleteMovieModal(props) {
    return (
        <Modal show={props.showDelete} onHide={props.handleDeleteClose} className="modal-dark" animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>DELETE MOVIE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are You sure You want to delete this movie?
        </Modal.Body>
            <Modal.Footer>
                <Button className="pink-full-btn" onClick={props.handleDeleteClose}>CONFIRM</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteMovieModal;