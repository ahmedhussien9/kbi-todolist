import React from "react";
import "./App.scss";
import TodoPage from "./features/todo/components/todo";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <TodoPage></TodoPage>
    </div>
  );
}

export default App;
