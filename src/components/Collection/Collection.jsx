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

    orderBy = (e) => {
        let orderByValue = e.target.value;
        let orderedMovies = this.state.movies.sort((a, b) => (a[orderByValue] > b[orderByValue]) ? 1 : -1)
        this.setState({ movies: orderedMovies });
    }

    render() {
        return <div className="movie-collection">
            <CollectionTopPane found={this.state.movies.length} filterByGenre={this.filterByGenre} orderBy={this.orderBy}></CollectionTopPane>
            <MovieCoversList movies={this.state.movies} setSelectedMovie={this.props.setSelectedMovie}></MovieCoversList>
        </div>
    }
}

export default Collection;
