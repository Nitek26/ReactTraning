import React, { useState } from 'react'
import './MoreActionsButton.css'
import { Dropdown } from 'react-bootstrap';
import EditMovieModal from '../EditMovieModal/EditMovieModal';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';

function MoreActionsButton(props) {
    const [showEdit, setEdit] = useState(false);
    const [showDelete, setDelete] = useState(false);

    const handleEditClose = () => setEdit(false);
    const handleEditShow = () => setEdit(true);
    const handleDeleteClose = () => setDelete(false);
    const handleDeleteShow = () => setDelete(true);


    return (
        <>
            <Dropdown className="dropdown-dark">
                <Dropdown.Toggle className="more-btn" id="dropdown-basic" tag="button" type="button">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleEditShow}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={handleDeleteShow}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <EditMovieModal movie={props.movie} handleEditClose={handleEditClose} handleEditShow={handleEditShow} showEdit={showEdit}></EditMovieModal>
            <DeleteMovieModal movie={props.movie} handleDeleteClose={handleDeleteClose} handleDeleteShow={handleDeleteShow} showDelete={showDelete}></DeleteMovieModal>
        </>
    )
}

export default MoreActionsButton;