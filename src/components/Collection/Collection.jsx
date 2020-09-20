import React from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'
import movies from '../../data/MockedMovies.js'

class Collection extends React.Component {
    state = {
        movies: movies.data
    };

    render() {
        return <div className="movie-collection">
            <CollectionTopPane></CollectionTopPane>
            <MovieCoversList movies={this.state.movies}></MovieCoversList>
        </div>
    }
}

export default Collection;
