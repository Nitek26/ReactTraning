export const getEditModalVisbility = store => store.viewReducer.showEdit;
export const getDeleteModalVisbility = store => store.viewReducer.showDelete;
export const getSearchTxt = store => store.moviesReducer.searchTxt;
export const getMovies = store => store.moviesReducer.movies;
export const getGenreFilter = store => store.moviesReducer.genreFilter;
export const getOrderByVal = store => store.moviesReducer.orderByVal;