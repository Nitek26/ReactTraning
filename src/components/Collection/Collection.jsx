import React from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'
import movies from '../../data/MockedMovies.js'
import genres from '../../data/MovieGenres.js';

class Collection extends React.Component {
    state = {
        movies: movies.data
    };

    filterByGenre = (e) => {
        e.preventDefault();
        let genreFilter = e.target.value;
        if (genreFilter === genres.ALL) {
            this.setState({ movies: movies.data });
            return;
        }

        let filteredMovies = this.state.movies.filter(movie => movie.genres.includes(genreFilter));
        this.setState({ movies: filteredMovies })
    }

    render() {
        return <div className="movie-collection">
            <CollectionTopPane found={this.state.movies.length} filterByGenre={this.filterByGenre}></CollectionTopPane>
            <MovieCoversList movies={this.state.movies}></MovieCoversList>
        </div>
    }
}

export default Collection;
