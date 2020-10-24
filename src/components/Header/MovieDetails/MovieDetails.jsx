import React from 'react'
import Logo from '../../Logo/Logo'
import './MovieDetails.css'

function MovieDetails(props) {
    const movie = props.selectedMovie;

    const closeMovieDetails = () => {
        props.setSelectedMovie(null);
    };

    return (
        <div className="movie-content-wrapper">
            <div className="search-top-pane">
                <Logo />
                <div className="search-back-btn" onClick={closeMovieDetails}><i class="fa fa-search" aria-hidden="true"></i></div>
            </div>
            <div className="details-content-wrapper">
                <img src={movie.poster_path} alt={movie.title} />
                <div className="details-txt">
                    <h1>{movie.title} <span className="circle-with-text">343</span></h1>
                    <p className="movie-tagline">{movie.tagline}</p>
                    <div className="movie-details-time-pane">
                        <span>{new Date(movie.release_date).getFullYear()}</span>
                        <span>{movie.runtime} min</span>
                    </div>
                    {movie.overview}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;