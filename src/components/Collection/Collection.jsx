import React, { useState } from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'
import mockedMoviesAPI from '../../data/MockedMovies.js'
import genres from '../../data/MovieGenres.js';
import movieSortProps from '../../data/MovieSortProps.js';

function Collection(props) {
    const mockedMovies = mockedMoviesAPI.data;
    const [orderByVal, setorderByVal] = useState(movieSortProps.RELEASE_DATE);
    const getSortedMovies = (collection) => collection.sort((a, b) => (a[orderByVal] > b[orderByVal]) ? 1 : -1);
    const [movies, setMovies] = useState({ movies: getSortedMovies(mockedMovies) });

    const filterByGenreEvent = (e) => {
        let genreFilter = e.target.value;
        if (genreFilter === genres.ALL) {
            setMovies({ movies: getSortedMovies(mockedMovies) });
            return;
        }

        let filteredMovies = mockedMovies.filter(movie => movie.genres.includes(genreFilter));
        setMovies({ movies: filteredMovies })
    }

    const orderByEvent = (e) => {
        setorderByVal(e.target.value);
        setMovies({ movies: getSortedMovies(movies.movies) });
    }

    return <div className="movie-collection">
        <CollectionTopPane found={movies.movies.length} filterByGenreEvent={filterByGenreEvent} orderByEvent={orderByEvent}></CollectionTopPane>
        <MovieCoversList movies={movies.movies} setSelectedMovie={props.setSelectedMovie}></MovieCoversList>
    </div>
}

export default Collection;
