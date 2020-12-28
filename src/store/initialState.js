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
            title: "",
            tagline: "some tag line",
            vote_average: 0,
            vote_count: 0,
            release_date: new Date(),
            poster_path: "",
            overview: "",
            budget: 0,
            revenue: 0,
            genres: [],
            runtime: 0
        },
        selectedMovie: null,
        isHeader: false
    }
};

export default initialState;