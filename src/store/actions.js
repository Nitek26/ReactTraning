import './actionsTypes.js'
import ACTIONS from './actionsTypes.js'

export const ViewEditModal = (visible) => ({
    type: ACTIONS.SHOW_EDIT_MODAL,
    payload: {
        visible
    }
});

export const ViewDeleteModal = (visible) => ({
    type: ACTIONS.SHOW_DELETE_MODAL,
    payload: {
        visible
    }
});

export const ViewAddMovieModal = (visible) => {
    return {
        type: ACTIONS.SHOW_ADD_MOVIE_MODAL,
        payload: {
            visible
        }
    }
}

export const AddMovieFormChanged = (value, inputName) => {
    return {
        type: ACTIONS.ADD_MOVIE_FORM_CHANGED,
        payload: {
            value,
            inputName
        }
    }
}

export const SetSearchTxt = (txt) => ({
    type: ACTIONS.SET_SEARCH_TXT,
    payload: {
        txt
    }
});

export const SetGenreFilter = (filter) => ({
    type: ACTIONS.SET_GENRE_FILTER,
    payload: {
        filter
    }
});

export const SetOrderBy = (order) => ({
    type: ACTIONS.SET_ORDER_BY,
    payload: {
        order
    }
});

export const LoadMovies = (movies) => ({
    type: ACTIONS.LOAD_MOVIES,
    payload: {
        movies
    }
});

export const AddMovie = (movie) => ({
    type: ACTIONS.ADD_MOVIE,
    payload: {
        movie
    }
});


export const EditMovie = (movie) => ({
    type: ACTIONS.EDIT_MOVIE,
    payload: {
        movie
    }
});

export const DeleteMovie = (id) => ({
    type: ACTIONS.DELETE_MOVIE,
    payload: {
        id
    }
});




