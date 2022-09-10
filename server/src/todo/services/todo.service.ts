import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo } from "../model/todo.model";

@Injectable()
export class TodosService {
  constructor(@InjectModel("Todo") private readonly TodoModel: Model<Todo>) { }

  async insertTodo(name: string, isDone: boolean) {
    const newTodo = new this.TodoModel({
      name,
      isDone,
    });
    const result = await newTodo.save();
    return result.id as string;
  }

  async getTodos() {
    const todos = await this.TodoModel.find().exec();
    return todos.map((todo) => ({
      id: todo.id,
      name: todo.name,
      isDone: todo.isDone,
    }));
  }

  async getSingleTodo(TodoId: string) {
    const todo = await this.findTodo(TodoId);
    return {
      id: todo.id,
    };
  }

  async updateTodo(todoId: string, name: string, isDone: boolean) {
    const updatedTodo = await this.findTodo(todoId);
    if (name) {
      updatedTodo.name = name;
    }
    updatedTodo.isDone = isDone;
    updatedTodo.save();
  }

  async deleteTodo(todoId: string) {
    const result = await this.TodoModel.deleteOne({ _id: todoId }).exec();
    if (result["n"] === 0) {
      throw new NotFoundException("Could not find Todo.");
    }
  }

  private async findTodo(id: string): Promise<Todo> {
    let todo;
    try {
      todo = await this.TodoModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException("Could not find Todo.");
    }
    if (!todo) {
      throw new NotFoundException("Could not find Todo.");
    }
    return todo;
  }
}
