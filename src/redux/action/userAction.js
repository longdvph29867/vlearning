import { courseService } from "../../service/courseService";
import { localUserService } from "../../service/localService";
import { userService } from "../../service/userService"
import { SET_LIST_COURSE } from "../constant/courseConstant";
import { SET_LOADING_OFF, SET_LOADING_ON } from "../constant/spinnerConstant";
import { SET_INFO_ACCOUNT, SET_USER_INFO } from "../constant/userConstant";

export const setSignInAction = (data, onSuccess, onError) => {
    return (dispatch) => {
        userService.signIn(data)
        .then((res) => {
            dispatch({
                type: SET_USER_INFO,
                payload: res.data,
            })
            localUserService.set(res.data);
            onSuccess();
        })
        .catch((err) => {
            onError(err.response.data);
        });
    }
}
export const setSignUpAction = (data, onSuccess, onError) => {
    return (dispatch) => {
        userService.signUp(data)
        .then((res) => {
            console.log(res);
            onSuccess();
        })
        .catch((err) => {
            console.log(err.response.data);
            onError(err.response.data);
        });
    }
}
export const setListCourse = () => {
    return (dispatch) => {
        dispatch({type: SET_LOADING_ON})
        courseService.getCourseList()
        .then((res) => {
            dispatch({type: SET_LOADING_OFF})
            dispatch({
                type: SET_LIST_COURSE,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({type: SET_LOADING_OFF})
            console.log(err);
        });
    }
}
export const setInfoAccoutUser = (data) => {
    return (dispatch) => {
        dispatch({type: SET_LOADING_ON})
        userService.getInfoAccountUser(data)
        .then((res) => {
            dispatch({type: SET_LOADING_OFF})
            dispatch({
                type: SET_INFO_ACCOUNT,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({type: SET_LOADING_OFF})
            console.log(err);
        });
    }
}


