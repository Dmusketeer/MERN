import React, { useState } from "react";
import { addNewTodos } from "../redux/actions/index";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewTodos(value));
  };

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          placeholder="Add a Todo to get started..."
          className="input"
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

export default TodoForm;
