import React from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'
// import mockedMoviesAPI from '../../data/MockedMovies.js'
// import genres from '../../data/MovieGenres.js';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGenreFilter, getMovies, getOrderByVal, getSearchTxt } from '../../store/selectors'
import { SetGenreFilter, SetOrderBy } from '../../store/actions'
import { SearchForMovie } from '../../store/asyncActions'

function Collection(props) {
    // const [movies, setMovies] = useState(mockedMoviesAPI.data);

    // const getSortedMovies = useCallback((collection) =>
    //     collection.sort((a, b) => (a[props.orderByVal] > b[props.orderByVal]) ?
    //         1 : -1), [props.orderByVal]);

    // const getFilteredMovies = useCallback((collection) => props.genreFilter === genres.ALL ?
    //     collection : collection.filter(movie => movie.genres.includes(props.genreFilter)), [props.genreFilter]);

    const filterByGenreEvent = (e) => {
        props.handleSetGenreFilter(e.target.value);
    };

    const orderByEvent = (e) => {
        props.handleSetOrderBy(e.target.value);
    }

    useEffect(() => {
        console.log("use effect is fired...");
        let allMovies = props.handleLoadingMovies("", props.genreFilter, props.orderByVal);
        // let filteredMovies = getFilteredMovies(allMovies);
        // setMovies(getSortedMovies(filteredMovies));
    }, [props.genreFilter, props.orderByVal, props.handleLoadingMovies]);

    return <div className="movie-collection">
        <CollectionTopPane found={props.movies.length}
            filterByGenreEvent={filterByGenreEvent}
            orderByEvent={orderByEvent}>
        </CollectionTopPane>
        <MovieCoversList movies={props.movies}
            setSelectedMovie={props.setSelectedMovie}>
        </MovieCoversList>
    </div>
}

const MapStateToProps = (state) => {

    return {
        movies: getMovies(state),
        genreFilter: getGenreFilter(state),
        orderByVal: getOrderByVal(state),
        searchTxt: getSearchTxt(state)
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
