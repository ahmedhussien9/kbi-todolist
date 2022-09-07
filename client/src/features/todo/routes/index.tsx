import { Route, Routes } from "react-router-dom";
import { Todo } from "./Todo";

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="todo" element={<Todo />} />
    </Routes>
  );
};
