import './actionsTypes.js'
import ACTIONS from './actionsTypes.js'

export const ViewEditModal = (visible) => ({
    type: ACTIONS.SHOW_EDIT_MODAL,
    payload: {
        visible
    }
});