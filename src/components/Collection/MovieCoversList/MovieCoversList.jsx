import React from 'react'
import './MovieCoversList.css'
import MovieCover from '../MovieCover/MovieCover'

class MovieCoversList extends React.Component {

    render() {
        return <div className="movie-cover-list">
            {this.props.movies.map(movie => <MovieCover movie={movie} key={movie.id} setSelectedMovie={this.props.setSelectedMovie} />)}
        </div>
    }
}

export default MovieCoversList;