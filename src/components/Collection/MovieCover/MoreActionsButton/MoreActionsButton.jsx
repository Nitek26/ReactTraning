import React from 'react'
import './MoreActionsButton.css'
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import EditMovieModal from '../EditMovieModal/EditMovieModal';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';
import { ViewDeleteModal, ViewEditModal } from '../../../../store/actions.js'
import { getEditModalVisbility, getDeleteModalVisbility } from '../../../../store/selectors.js'

function MoreActionsButton(props) {
    return (
        <>
            <Dropdown className="dropdown-dark">
                <Dropdown.Toggle className="more-btn" id="dropdown-basic" tag="button" type="button">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => props.handleEditShow()}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.handleDeleteShow()}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <EditMovieModal movie={props.movie} handleEditClose={() => props.handleEditClose()} showEdit={props.showEdit}></EditMovieModal>
            <DeleteMovieModal movie={props.movie} handleDeleteClose={() => props.handleDeleteClose()} showDelete={props.showDelete}></DeleteMovieModal>
        </>
    )
}

const mapStateToProps = state => {
    const showEdit = getEditModalVisbility(state);
    const showDelete = getDeleteModalVisbility(state);
    return { showEdit, showDelete }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEditClose: () => dispatch(ViewEditModal(false)),
        handleEditShow: () => dispatch(ViewEditModal(true)),
        handleDeleteClose: () => dispatch(ViewDeleteModal(false)),
        handleDeleteShow: () => dispatch(ViewDeleteModal(true))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreActionsButton);