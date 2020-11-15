import './actionsTypes.js'
import ACTIONS from './actionsTypes.js'

export const ViewEditModal = (visble) => ({
    type: ACTIONS.SHOW_EDIT_MODAL,
    payload: {
        visble
    }
});