import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const onFormSubmit = () => {};

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
          autofocus
        />
      </form>
    </>
  );
};

export default TodoForm;
