import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './AddMovie.css'
import './../../../data/MovieGenres.js';
import genres from './../../../data/MovieGenres.js';

function AddMovie() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="pink-full-btn" onClick={handleShow}>
                + ADD MOVIE
                    </Button>

            <Modal show={show} onHide={handleClose} className="modal-dark">
                <Modal.Header closeButton>
                    <Modal.Title>ADD MOVIE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" />
                        </Form.Group>
                        <Form.Group controlId="formReleaseDate">
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control placeholder="Select Date" type="date" />
                        </Form.Group>
                        <Form.Group controlId="formUrl">
                            <Form.Label>Movie URL</Form.Label>
                            <Form.Control placeholder="Movie URL here" />
                        </Form.Group>
                        <Form.Group controlId="formGenre">
                            <Form.Label>Genre</Form.Label>
                            <span className="wrap">
                                <Form.Control as="select">
                                    <option default>Select Genre</option>
                                    <option>{genres.DOCUMENTARY}</option>
                                    <option>{genres.COMEDY}</option>
                                    <option>{genres.HORROR}</option>
                                    <option>{genres.CRIME}</option>
                                    <option>{genres.DRAMA}</option>
                                </Form.Control>
                            </span>
                        </Form.Group>
                        <Form.Group controlId="formOverview">
                            <Form.Label>Overview</Form.Label>
                            <Form.Control placeholder="Overview here" />
                        </Form.Group>
                        <Form.Group controlId="formRuntime">
                            <Form.Label>Runtime</Form.Label>
                            <Form.Control placeholder="Runtime here" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="pink-empty-btn" onClick={handleClose}>RESET</Button>
                    <Button className="pink-full-btn" onClick={handleClose}>SUBMIT</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;