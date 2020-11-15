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

