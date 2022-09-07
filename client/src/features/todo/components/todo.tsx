import * as React from "react";
import { Button, Input, Item } from "../../../components";
import {
  addTodoApi,
  editTodoApi,
  getAllTodo,
  removeTodoApi,
  TodoDTO,
} from "../api/todo.api";
import { TodoResponse } from "../types";

import "./todo.scss";

export interface TodoUiProps {}

const TodoForm: React.FC<TodoUiProps> = () => {
  const inputRef = React.useRef<any>();
  const [data, setData] = React.useState<TodoDTO[]>([]);
  const [update, setUpdate] = React.useState<boolean>(false);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [updatedTodo, setUpdatedTodo] = React.useState<TodoDTO>({
    id: "",
    name: "",
    isDone: false,
  });

  React.useEffect(() => {
    getAllTodo().then((todos: TodoDTO[]) => {
      setData(todos);
      setIsLoaded(true);
    });
  }, []);

  const findTodo = (id: string) => {
    const todo = data.find((todo: TodoDTO) => todo.id === id);
    return todo;
  };

  const addAndEditTodo = (): void => {
    const value = inputRef.current.value;
    if (value && !update) {
      let body = { id: "", name: value, isDone: false };
      addTodoApi(body).then((todo: TodoResponse) => {
        setData((value) => [
          ...value,
          { id: todo.id, name: todo.name, isDone: todo.isDone },
        ]);
        resetInputHandler();
      });
    }

    if (value && update) {
      let todo = findTodo(updatedTodo?.id) as TodoDTO;
      todo.name = inputRef.current.value;
      editTodoApi(todo.id, todo).then((todo: TodoResponse) => {
        const updateTodoList = data.map((t: TodoDTO) => {
          if (t.id === todo.id) {
            return { id: t.id, name: t.name, isDone: t.isDone } as TodoDTO;
          }
          return t;
        });
        setData(updateTodoList);
        resetInputHandler();
      });
    }
  };

  const editTodoHandler = (id: string) => {
    const todo = findTodo(id);
    if (id && todo) {
      setUpdate(true);
      setUpdatedTodo(todo);
      inputRef.current.value = todo.name;
    }
  };

  const deleteTodoHandler = (id: string) => {
    let todo = findTodo(id) as TodoDTO;
    removeTodoApi(todo.id).then((todo: TodoResponse) => {
      const updateTodoList = data.filter((t: TodoDTO) => t.id !== todo.id);
      setData(updateTodoList);
      resetInputHandler();
    });
  };

  const resetInputHandler = () => {
    setUpdate(false);
    inputRef.current.value = "";
  };

  const onChangeInputHandler = (value: any) => {};

  return (
    <div className="todo-container">
      <h1 className="title"> Todo List</h1>
      <p className="subTitle">Manage your todo items</p>
      <hr />
      <header className="header">
        <Input
          inputRef={inputRef}
          onChangeInput={onChangeInputHandler}
          placeholder="Write a new Todo item"
        />
        <Button name={update ? "Save" : "Add"} onClick={addAndEditTodo} />
      </header>
      <div className="body">
        {data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <Item
                name={item?.name}
                itemId={item.id}
                index={index + 1}
                key={index}
                editItem={editTodoHandler}
                deleteItem={deleteTodoHandler}
              />
            );
          })
        ) : (
          <>
            {isLoaded && (
              <div className="empty-message">
                <h5>There is no todo items yet!</h5>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
