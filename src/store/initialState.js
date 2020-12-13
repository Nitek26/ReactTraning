import genres from '../data/MovieGenres'
import movieSortProps from '../data/MovieSortProps'

const initialState = {
    viewReducer: {
        showEdit: false,
        showDelete: false,
        showAdd: false
    },
    moviesReducer: {
        searchTxt: "",
        movies: [],
        fetchedMovies: [],
        genreFilter: genres.ALL,
        orderByVal: movieSortProps.RELEASE_DATE,
        newMovie: {
            formTitle: "",
            formReleaseDate: "",
            formUrl: "",
            formGenre: "",
            formOverview: "",
            formRuntime: ""

        }
    }
};

export default initialState;