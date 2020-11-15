import React, { useState } from 'react'
import './MoreActionsButton.css'
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import EditMovieModal from '../EditMovieModal/EditMovieModal';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';
import { ViewEditModal } from '../../../../store/actions.js'

function MoreActionsButton(props) {
    const [showDelete, setDelete] = useState(false);
    const handleDeleteClose = () => setDelete(false);
    const handleDeleteShow = () => setDelete(true);

    return (
        <>
            <Dropdown className="dropdown-dark">
                <Dropdown.Toggle className="more-btn" id="dropdown-basic" tag="button" type="button">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => props.handleEditShow()}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={handleDeleteShow}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <EditMovieModal movie={props.movie} handleEditClose={() => props.handleEditClose()} showEdit={props.showEdit}></EditMovieModal>
            <DeleteMovieModal movie={props.movie} handleDeleteClose={handleDeleteClose} handleDeleteShow={handleDeleteShow} showDelete={showDelete}></DeleteMovieModal>
        </>
    )
}

const mapStateToProps = state => {
    const showEdit = state.viewReducer.showEdit;
    return { showEdit }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEditClose: () => dispatch(ViewEditModal(false)),
        handleEditShow: () => dispatch(ViewEditModal(true))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreActionsButton);