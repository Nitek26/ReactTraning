import ACTIONS from './actionsTypes.js'

const viewReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_EDIT_MODAL: {
            const visible = action.payload.visible;
            return {
                ...state,
                showEdit: visible
            };
        }
        case ACTIONS.SHOW_DELETE_MODAL: {
            const visible = action.payload.visible;
            return {
                ...state,
                showDelete: visible
            };
        }
        default: { // need this for default case
            return state;
        }
    }
}

const moviesReducer = (state = {}, action) => {
    switch (action.type) {
        case (ACTIONS.SET_SEARCH_TXT): {
            let txt = action.payload.txt;
            return {
                ...state,
                searchTxt: txt
            };
        }
        case (ACTIONS.SET_GENRE_FILTER): {
            let filter = action.payload.filter;
            return {
                ...state,
                genreFilter: filter
            };
        }
        case (ACTIONS.SET_ORDER_BY): {
            let order = action.payload.order;
            return {
                ...state,
                orderByVal: order
            };
        }
        default: {
            return state;
        }
    }
}

export { viewReducer, moviesReducer };
