import React from "react";
import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import "./App.css";
const App = () => {
  return (
    <>
      <Header />
      <TodoForm />
      <Todos />
    </>
  );
};

export default App;
