import React, { useState, useCallback } from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'
import mockedMoviesAPI from '../../data/MockedMovies.js'
import genres from '../../data/MovieGenres.js';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGenreFilter, getMovies, getOrderByVal } from '../../store/selectors'
import { SetGenreFilter, SetOrderBy } from '../../store/actions'

function Collection(props) {
    const [movies, setMovies] = useState(mockedMoviesAPI.data);

    const getSortedMovies = useCallback((collection) => collection.sort((a, b) => (a[props.orderByVal] > b[props.orderByVal]) ?
        1 : -1), [props.orderByVal]);
    const getFilteredMovies = useCallback((collection) => props.genreFilter === genres.ALL ?
        collection : collection.filter(movie => movie.genres.includes(props.genreFilter)), [props.genreFilter]);

    const filterByGenreEvent = (e) => {
        props.handleSetGenreFilter(e.target.value);
    };

    const orderByEvent = (e) => {
        props.handleSetOrderBy(e.target.value);
    }

    useEffect(() => {
        let filteredMovies = getFilteredMovies(mockedMoviesAPI.data);
        setMovies(getSortedMovies(filteredMovies));
    }, [props.genreFilter, props.orderByVal, getSortedMovies, getFilteredMovies]);

    return <div className="movie-collection">
        <CollectionTopPane found={movies.length} filterByGenreEvent={filterByGenreEvent} orderByEvent={orderByEvent}></CollectionTopPane>
        <MovieCoversList movies={movies} setSelectedMovie={props.setSelectedMovie}></MovieCoversList>
    </div>
}

const MapStateToProps = (state) => {

    return {
        movies: getMovies(state),
        genreFilter: getGenreFilter(state),
        orderByVal: getOrderByVal(state)
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleSetGenreFilter: (filter) => dispatch(SetGenreFilter(filter)),
        handleSetOrderBy: (order) => dispatch(SetOrderBy(order))
    };
}
export default connect(MapStateToProps, MapDispatchToProps)(Collection);
