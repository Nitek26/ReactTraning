import React, { useState } from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'
import mockedMovies from '../../data/MockedMovies.js'
import genres from '../../data/MovieGenres.js';
import movieSortProps from '../../data/MovieSortProps.js';

function Collection(props) {
    const [orderByVal, setorderByVal] = useState(movieSortProps.TITLE);
    const [movies, setMovies] = useState({ movies: mockedMovies.data.sort((a, b) => (a[orderByVal] > b[orderByVal]) ? 1 : -1) });

    const filterByGenre = (e) => {
        e.preventDefault();
        let genreFilter = e.target.value;
        if (genreFilter === genres.ALL) {
            setMovies({ movies: mockedMovies.data.sort((a, b) => (a[orderByVal] > b[orderByVal]) ? 1 : -1) });
            return;
        }

        let filteredMovies = mockedMovies.data.filter(movie => movie.genres.includes(genreFilter));
        setMovies({ movies: filteredMovies })
    }

    const orderBy = (e) => {
        let orderByValue = e.target.value;
        setorderByVal(orderByValue);
        let orderedMovies = movies.movies.sort((a, b) => (a[orderByValue] > b[orderByValue]) ? 1 : -1);
        setMovies({ movies: orderedMovies });
    }

    return <div className="movie-collection">
        <CollectionTopPane found={movies.movies.length} filterByGenre={filterByGenre} orderBy={orderBy}></CollectionTopPane>
        <MovieCoversList movies={movies.movies} setSelectedMovie={props.setSelectedMovie}></MovieCoversList>
    </div>
}

export default Collection;
