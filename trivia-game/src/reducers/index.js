import { ADD_ANSWER } from "../constants/action-types";
const initialState = {
  answers: []
};
const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ANSWER:
      return { ...state, answers: state.answers.concat(action.payload) };
    default:
      return state;
  }
};
export default rootReducer;