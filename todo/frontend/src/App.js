import React from "react";
import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import "./App.css";
const App = () => {
  return (
    <>
      <h1> Hey! Dheeraj</h1>
      <Header />
      <TodoForm />
      <Todos />
    </>
  );
};

export default App;
