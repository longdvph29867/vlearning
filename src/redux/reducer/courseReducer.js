import { SET_LIST_COURSE } from "../constant/courseConstant";

const initialState = {
    listCourse: [],
}

const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_LIST_COURSE: {
    return { ...state, listCourse: payload }
  }

  default:
    return state
  }
}
export default courseReducer;
