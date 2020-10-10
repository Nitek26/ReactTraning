import React, { useState } from 'react'
import './MoreActionsButton.css'
import { Dropdown, Form, Button, Modal } from 'react-bootstrap';
import genres from './../../../../data/MovieGenres.js';

function MoreActionsButton() {
    const [showEdit, setEdit] = useState(false);
    const [showDelete, setDelete] = useState(false);

    const handleEditClose = () => setEdit(false);
    const handleEditShow = () => setEdit(true);
    const handleDeleteClose = () => setDelete(false);
    const handleDeleteShow = () => setDelete(true);


    return (

        <>
            <Dropdown>
                <Dropdown.Toggle className="more-btn" id="dropdown-basic" tag="button" type="button">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleEditShow}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={handleDeleteShow}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Modal show={showEdit} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title>EDIT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" />
                        </Form.Group>
                        <Form.Group controlId="formReleaseDate">
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control placeholder="Select Date" />
                        </Form.Group>
                        <Form.Group controlId="formUrl">
                            <Form.Label>Movie URL</Form.Label>
                            <Form.Control placeholder="Movie URL here" />
                        </Form.Group>
                        <Form.Group controlId="formGenre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control as="select">
                                <option default>Select Genre</option>
                                <option>{genres.DOCUMENTARY}</option>
                                <option>{genres.COMEDY}</option>
                                <option>{genres.HORROR}</option>
                                <option>{genres.CRIME}</option>
                                <option>{genres.DRAMA}</option>
                            </Form.Control>
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
                    <Button variant="secondary" onClick={handleEditClose}>RESET</Button>
                    <Button variant="primary" onClick={handleEditClose}>EDIT</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showDelete} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>DELETE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    delete!!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleDeleteClose}>DELETE</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MoreActionsButton;