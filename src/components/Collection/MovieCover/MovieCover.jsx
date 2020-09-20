import React from 'react'
import './MovieCover.css'
import MoreActionsButton from './MoreActionsButton/MoreActionsButton'
import PropTypes from 'prop-types'

class MovieCover extends React.Component {
    render() {
        return <div className="movie-cover">
            <MoreActionsButton></MoreActionsButton>
            <img src="https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"></img>
            <div className="movie-details">
                <div className="title">Black Panther</div>
                <div className="year">2020</div>
                <div className="genre">Adventure, Comedy, Action</div>
            </div>

        </div>
    }
}

MovieCover.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired
    })
};

export default MovieCover;