import React from 'react'
import './MovieCoversList.css'
import MovieCover from '../MovieCover/MovieCover'

class MovieCoversList extends React.Component {
    render() {
        return <div className="movie-cover-list">
            <MovieCover></MovieCover>
            <MovieCover></MovieCover>
            <MovieCover></MovieCover>
            <MovieCover></MovieCover>
        </div>
    }
}

export default MovieCoversList;