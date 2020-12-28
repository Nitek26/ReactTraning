import React from 'react';
import { connect } from 'react-redux'
import './EditMovieModal.css'
import { Form, Button, Modal } from 'react-bootstrap';
import { getEditModalVisbility, getSelectedMovie } from '../../../../store/selectors'
import { SetSelectedMovie, ViewEditModal } from '../../../../store/actions';

function EditMovieModal(props) {
    return (
        <Modal show={props.showEdit} onHide={props.handleEditClose} className="modal-dark">
            <Modal.Header closeButton>
                <Modal.Title>EDIT MOVIE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>MOVIE ID</Form.Label><br></br>
                        <label>{props.movie.id}</label>
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>TITLE</Form.Label>
                        <Form.Control value={props.movie.title} />
                    </Form.Group>
                    <Form.Group controlId="formReleaseDate">
                        <Form.Label>RELEASE DATE</Form.Label>
                        <Form.Control value={props.movie.release_date} type="date" />
                    </Form.Group>
                    <Form.Group controlId="formUrl">
                        <Form.Label>MOVIE URL</Form.Label>
                        <Form.Control value={props.movie.poster_path} />
                    </Form.Group>
                    <Form.Group controlId="formGenre">
                        <Form.Label>GENRE</Form.Label>
                        <Form.Control value={props.movie.genres}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formOverview">
                        <Form.Label>OVERVIEW</Form.Label>
                        <Form.Control value={props.movie.overview} />
                    </Form.Group>
                    <Form.Group controlId="formRuntime">
                        <Form.Label>RUNTIME</Form.Label>
                        <Form.Control value={props.movie.runtime || ""} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="pink-empty-btn" onClick={props.handleEditClose}>RESET</Button>
                <Button variant="primary" className="pink-full-btn" onClick={props.handleEditClose}>EDIT</Button>
            </Modal.Footer>
        </Modal>
    )
}

const MapStateToProps = (state) => {
    return {
        showEdit: getEditModalVisbility(state),
        movie: getSelectedMovie(state)
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleEditClose: () => { dispatch(SetSelectedMovie(null)); dispatch(ViewEditModal(false)) },
    };
}
export default connect(MapStateToProps, MapDispatchToProps)(EditMovieModal);
