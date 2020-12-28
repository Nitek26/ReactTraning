import React from 'react';
import { connect } from 'react-redux'
import './DeleteMovieModal.css';
import { Button, Modal } from 'react-bootstrap';
import { getDeleteModalVisbility, getSelectedMovie } from '../../../../store/selectors'
import { SetSelectedMovie, ViewDeleteModal } from '../../../../store/actions';

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

const MapStateToProps = (state) => {
    return {
        showDelete: getDeleteModalVisbility(state),
        movie: getSelectedMovie(state)
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleDeleteClose: () => { dispatch(SetSelectedMovie(null)); dispatch(ViewDeleteModal(false)) },
    };
}
export default connect(MapStateToProps, MapDispatchToProps)(DeleteMovieModal);
