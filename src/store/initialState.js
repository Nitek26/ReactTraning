import genres from '../data/MovieGenres'
import movieSortProps from '../data/MovieSortProps'

const initialState = {
    viewReducer: {
        showEdit: false,
        showDelete: false
    },
    moviesReducer: {
        searchTxt: "",
        movies: [],
        fetchedMovies: [],
        genreFilter: genres.ALL,
        orderByVal: movieSortProps.RELEASE_DATE,
    }
};

export default initialState;