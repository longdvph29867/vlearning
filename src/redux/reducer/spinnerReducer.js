import { SET_LOADING_OFF, SET_LOADING_ON, SET_SHOW_MENU_OFF, SET_SHOW_MENU_ON } from "../constant/spinnerConstant";

const initialState = {
    isSpinner: false,
    showMenu: false,
}

const spinnerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_LOADING_ON: {
        return { ...state, isSpinner: true }
    }
    case SET_LOADING_OFF: {
        return { ...state, isSpinner: false }
    }
    case SET_SHOW_MENU_ON: {
        return { ...state, showMenu: true }
    }
    case SET_SHOW_MENU_OFF: {
        return { ...state, showMenu: false }
    }
    default:
        return state
    }
}
export default spinnerReducer;