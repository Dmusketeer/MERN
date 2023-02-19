import axios from "axios";
import { ADDNEW_TODO } from "./type";
export const addNewTodos = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/api/todos", {
      data,
    });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling newtodos", error.message);
  }
};
