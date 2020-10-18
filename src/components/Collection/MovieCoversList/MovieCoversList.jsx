import React from 'react'
import './MovieCoversList.css'
import MovieCover from '../MovieCover/MovieCover'

function MovieCoversList(props) {
    return <div className="movie-cover-list">
        {props.movies.map(movie => <MovieCover movie={movie} key={movie.id}
            setSelectedMovie={props.setSelectedMovie} />)}
    </div>
}

export default MovieCoversList;