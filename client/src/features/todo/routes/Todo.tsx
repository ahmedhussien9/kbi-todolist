import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTodo } from "../api/todo.api";
import { Layout } from "../components/layout";
import TodoForm from "../components/todo";

export const Todo = () => {
  const navigate = useNavigate();

 

  return (
    <Layout title="Log in to your account">
      <TodoForm />
    </Layout>
  );
};
