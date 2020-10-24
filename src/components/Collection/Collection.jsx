import React, { useState, useCallback } from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'
import mockedMoviesAPI from '../../data/MockedMovies.js'
import genres from '../../data/MovieGenres.js';
import movieSortProps from '../../data/MovieSortProps.js';
import { useEffect } from 'react'

function Collection(props) {
    const [movies, setMovies] = useState(mockedMoviesAPI.data);
    const [genreFilter, setGenreFilter] = useState(genres.ALL);
    const [orderByVal, setorderByVal] = useState(movieSortProps.RELEASE_DATE);

    const getSortedMovies = useCallback((collection) => collection.sort((a, b) => (a[orderByVal] > b[orderByVal]) ?
        1 : -1), [orderByVal]);
    const getFilteredMovies = useCallback((collection) => genreFilter === genres.ALL ?
        collection : collection.filter(movie => movie.genres.includes(genreFilter)), [genreFilter]);

    const filterByGenreEvent = (e) => {
        setGenreFilter(e.target.value);
    };

    const orderByEvent = (e) => {
        setorderByVal(e.target.value);
    }

    useEffect(() => {
        let filteredMovies = getFilteredMovies(mockedMoviesAPI.data);
        setMovies(getSortedMovies(filteredMovies));
    }, [genreFilter, orderByVal, getSortedMovies, getFilteredMovies]);

    return <div className="movie-collection">
        <CollectionTopPane found={movies.length} filterByGenreEvent={filterByGenreEvent} orderByEvent={orderByEvent}></CollectionTopPane>
        <MovieCoversList movies={movies} setSelectedMovie={props.setSelectedMovie}></MovieCoversList>
    </div>
}

export default Collection;
