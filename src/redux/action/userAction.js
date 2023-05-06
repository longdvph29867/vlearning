import { courseService } from "../../service/courseService";
import { localUserService } from "../../service/localService";
import { userService } from "../../service/userService"
import { SET_LIST_COURSE } from "../constant/courseConstant";
import { SET_INFO_ACCOUNT, SET_USER_INFO } from "../constant/userConstant";

export const setSignInAction = (data, onSuccess, onError) => {
    return (dispath) => {
        userService.signIn(data)
        .then((res) => {
            dispath({
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
    return (dispath) => {
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
    return (dispath) => {
        courseService.getCourseList()
        .then((res) => {
            dispath({
                type: SET_LIST_COURSE,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
export const setInfoAccoutUser = (data) => {
    return (dispath) => {
        userService.getInfoAccountUser(data)
        .then((res) => {
            dispath({
                type: SET_INFO_ACCOUNT,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
