import React from "react";
import "./App.scss";
import Todo from "./features/todo/components/todo";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

export default App;
