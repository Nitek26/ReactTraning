import React from 'react'
import './MovieCover.css'
import MoreActionsButton from './MoreActionsButton/MoreActionsButton'
import PropTypes from 'prop-types'

class MovieCover extends React.Component {
    render() {
        return <div className="movie-cover">
            <MoreActionsButton></MoreActionsButton>
            <img src={this.props.movie.poster_path} alt={this.props.movie.title}></img>
            <div className="movie-details">
                <div className="title">{this.props.movie.title}</div>
                <div className="year">{new Date(this.props.movie.release_date).getFullYear()}</div>
                <div className="genre">{this.props.movie.genres.join(', ')}</div>
            </div>
        </div>
    }
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