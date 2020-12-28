import React from 'react'
import './MovieCover.css'
import MoreActionsButton from './MoreActionsButton/MoreActionsButton'
import PropTypes from 'prop-types'

function MovieCover(props) {
    const selecteMovieClick = () => {
        props.setSelectedMovie(props.movie, true);
    }
    return <div className="movie-cover" >
        <MoreActionsButton movie={props.movie}></MoreActionsButton>
        <img src={props.movie.poster_path} alt={props.movie.title} onClick={selecteMovieClick}></img>
        <div className="movie-details">
            <div className="title">{props.movie.title}</div>
            <div className="year">{new Date(props.movie.release_date).getFullYear()}</div>
            <div className="genre">{props.movie.genres.join(', ')}</div>
        </div>
    </div>
}

MovieCover.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired
    })
};

export default MovieCover;