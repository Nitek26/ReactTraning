import React from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGenreFilter, getSelectedMovie, getMovies, getOrderByVal, getSearchTxt } from '../../store/selectors'
import { SetGenreFilter, SetOrderBy } from '../../store/actions'
import { SearchForMovie } from '../../store/asyncActions'
import DeleteMovieModal from './MovieCover/DeleteMovieModal/DeleteMovieModal'
import EditMovieModal from './MovieCover/EditMovieModal/EditMovieModal'

function Collection(props) {
    const filterByGenreEvent = (e) => {
        props.handleSetGenreFilter(e.target.value, props.genreFilter, props.orderByVal);
    };

    const orderByEvent = (e) => {
        props.handleSetOrderBy(e.target.value, props.genreFilter, props.orderByVal);
    }

    useEffect(() => {
        props.handleLoadingMovies(props.searchTxt, props.genreFilter, props.orderByVal);
    }, []);

    return <div className="movie-collection">
        <CollectionTopPane found={props.movies.length}
            filterByGenreEvent={filterByGenreEvent}
            orderByEvent={orderByEvent}>
        </CollectionTopPane>
        <MovieCoversList movies={props.movies}
            setSelectedMovie={props.setSelectedMovie}>
        </MovieCoversList>
        {
            props.movie != null
                ? <><EditMovieModal></EditMovieModal>
                    <DeleteMovieModal></DeleteMovieModal>
                </> : <></>
        }
    </div>
}

const MapStateToProps = (state) => {

    return {
        movies: getMovies(state),
        genreFilter: getGenreFilter(state),
        orderByVal: getOrderByVal(state),
        searchTxt: getSearchTxt(state),
        movie: getSelectedMovie(state)
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleSetGenreFilter: (filter) => dispatch(SetGenreFilter(filter)),
        handleSetOrderBy: (order) => dispatch(SetOrderBy(order)),
        handleLoadingMovies: (searchTxt, genreFilter, orderByVal) => dispatch(SearchForMovie(searchTxt, genreFilter, orderByVal))
    };
}
export default connect(MapStateToProps, MapDispatchToProps)(Collection);
