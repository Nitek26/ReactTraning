import ACTIONS from './actionsTypes.js'
import initialState from './initialState.js'

const viewReducer = (state = initialState, action) => {
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

export { viewReducer };