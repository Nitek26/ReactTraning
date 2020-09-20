import React from 'react'
import './MovieCoversList.css'
import MovieCover from '../MovieCover/MovieCover'
import movies from '../../../data/MockedMovies.js'

class MovieCoversList extends React.Component {
    state = {
        movies: movies.data
    };

    render() {
        return <div className="movie-cover-list">

            {console.log("Movies:" + JSON.stringify(this.state.movies))}
            {this.state.movies.map(movie => <MovieCover movie={movie} key={movie.id} />)}
        </div>

    }
}

export default MovieCoversList;