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
        default: { // need this for default case
            return state;
        }
    }
}

export { viewReducer };