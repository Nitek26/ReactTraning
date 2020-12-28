import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import './AddMovie.css'
import './../../../data/MovieGenres.js';
import genres from './../../../data/MovieGenres.js';
import { ViewAddMovieModal, AddMovieFormChanged } from '../../../store/actions.js'
import { AddMovieAsync } from '../../../store/asyncActions.js'
function AddMovie(props) {

    const handleInputChange = (event) => {
        props.hanldeAddMovieFormChange(event.target.value, event.target.name);
    }

    return (
        <>
            <Button className="pink-full-btn" onClick={props.handleShow}>
                + ADD MOVIE
                    </Button>

            <Modal show={props.show} onHide={props.handleClose} className="modal-dark">
                <Modal.Header closeButton>
                    <Modal.Title>ADD MOVIE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group >
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" placeholder="Title" value={props.title} onChange={(e) => handleInputChange(e)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control name="release_date" placeholder="Select Date" type="date" value={props.release_date} onChange={(e) => handleInputChange(e)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Movie URL</Form.Label>
                            <Form.Control name="poster_path" placeholder="Movie URL here" value={props.poster_path} onChange={(e) => handleInputChange(e)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Genre</Form.Label>
                            <span className="wrap">
                                <Form.Control name="genres" as="select" value={props.genres} onChange={(e) => handleInputChange(e)}>
                                    <option default>Select Genre</option>
                                    <option>{genres.DOCUMENTARY}</option>
                                    <option>{genres.COMEDY}</option>
                                    <option>{genres.HORROR}</option>
                                    <option>{genres.CRIME}</option>
                                    <option>{genres.DRAMA}</option>
                                </Form.Control>
                            </span>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Overview</Form.Label>
                            <Form.Control name="overview" placeholder="Overview here" value={props.overview} onChange={(e) => handleInputChange(e)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Runtime</Form.Label>
                            <Form.Control name="runtime" placeholder="Runtime here" type="number" value={props.runtime} onChange={(e) => handleInputChange(e)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="pink-empty-btn" onClick={props.handleClose}>RESET</Button>
                    <Button className="pink-full-btn" onClick={() => props.addMovieAsync(props.newMovie)}>SUBMIT</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const MapStateToProps = (state) => {
    return {
        show: state.viewReducer.showAdd,
        title: state.moviesReducer.newMovie.title,
        releaseDate: state.moviesReducer.newMovie.releaseDate,
        url: state.moviesReducer.newMovie.url,
        genre: state.moviesReducer.newMovie.genre,
        overview: state.moviesReducer.newMovie.overview,
        runtime: state.moviesReducer.newMovie.runtime,
        newMovie: state.moviesReducer.newMovie
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleShow: () => dispatch(ViewAddMovieModal(true)),
        handleClose: () => dispatch(ViewAddMovieModal(false)),
        hanldeAddMovieFormChange: (value, inputName) => dispatch(AddMovieFormChanged(value, inputName)),
        addMovieAsync: (movie) => dispatch(AddMovieAsync(movie))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(AddMovie);