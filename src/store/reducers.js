import ACTIONS from './actionsTypes.js'
import initialState from './initialState.js'

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_EDIT_MODAL: {
            console.log(' SHOW_EDIT_MODAL reducer action.payload: ' + JSON.stringify(action.payload));
            console.log('store state in SHOW_EDIT_MODAL: ' + JSON.stringify(state));
            const visible = action.payload.visible;
            return {
                ...state,
                showEdit: visible
            };
        }
        default: { // need this for default case
            console.log('hitting default state: ' + JSON.stringify(state));
            return state;
        }
    }
}

export { viewReducer };