import genres from '../data/MovieGenres'

const initialState = {
    viewReducer: {
        showEdit: false,
        showDelete: false
    },
    moviesReducer: {
        searchTxt: "",
        movies: [],
        genreFilter: genres.ALL,
        orderByVal: "",
    }
};

export default initialState;