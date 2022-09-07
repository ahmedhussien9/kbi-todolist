import { axios } from "../../../lib/axios";
import { TodoResponse } from "../types";

export type TodoDTO = {
  id: string;
  name: string;
  isDone: boolean;
};

export const addTodoApi = (data: TodoDTO): Promise<TodoResponse> => {
  return axios.post("/todos", data);
};

export const getAllTodo = (): Promise<TodoResponse[]> => {
  return axios.get("/todos");
};

export const editTodoApi = (
  id: string,
  body: TodoDTO
): Promise<TodoResponse> => {
  return axios.patch(`/todos/${id}`, body);
};

export const removeTodoApi = (id: string): Promise<TodoResponse> => {
  return axios.delete(`/todos/${id}`);
};
