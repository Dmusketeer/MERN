import * as actionTypes from "../actions/type";
export const TodoReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];
    default:
      return state;
  }
};
