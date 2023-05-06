import { localUserService } from "../../service/localService";
import { OFF_FORM_UPDATE, ON_FORM_UPDATE, SET_INFO_ACCOUNT, SET_USER_INFO } from "../constant/userConstant";

const initialState = {
    infoUser: localUserService.get(),
    isFormUpdate: false,
    infoAccountUser: {},
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_USER_INFO: {
        return { ...state, infoUser: payload }
    }
    case ON_FORM_UPDATE: {
        return { ...state, isFormUpdate: payload}
    }
    case OFF_FORM_UPDATE: {
        return { ...state, isFormUpdate: payload}
    }
    case SET_INFO_ACCOUNT: {
        return { ...state, infoAccountUser: payload}
    }
    default:
        return state
    }
}
export default userReducer;
