import React from 'react'
import Logo from '../../Logo/Logo'
import './MovieDetails.css'

function MovieDetails(props) {
    const movie = props.selectedMovie;
    return (
        <div className="movie-content-wrapper"><Logo></Logo>

            <div className="details-content-wrapper">
                <img src={movie.poster_path} />
                <div className="details-txt">
                    <h1>{movie.title} <span className="circle-with-text">343</span></h1>
                    <p className="movie-tagline">{movie.tagline}</p>
                    <div className="movie-details-time-pane">
                        <span>{new Date(movie.release_date).getFullYear()}</span>
                        <span>{movie.runtime} min</span>
                    </div>
                    {movie.overview}
                </div>
            </div></div>
    )
}

export default MovieDetails;