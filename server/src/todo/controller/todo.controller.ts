import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import { TodosService } from "../services/todo.service";

@Controller("Todos")
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Post()
  async addTodo(@Body("name") name: string, @Body("isDone") isDone: boolean) {
    const generatedId = await this.todoService.insertTodo(name, isDone);
    return {
      id: generatedId,
      name,
      isDone,
      message: "Todo has been added successfully",
    };
  }

  @Get()
  async getAllTodos() {
    const todos = await this.todoService.getTodos();
    return todos;
  }

  @Get(":id")
  getTodo(@Param("id") todoId: string) {
    return this.todoService.getSingleTodo(todoId);
  }

  @Patch(":id")
  async updateTodo(
    @Param("id") todoId: string,
    @Body("name") name: string,
    @Body("isDone") isDone: boolean
  ) {
    await this.todoService.updateTodo(todoId, name, isDone);
    return {
      id: todoId,
      name,
      isDone,
      message: "Todo has been updated successfully",
    };
  }

  @Delete(":id")
  async removeTodo(@Param("id") todoId: string) {
    await this.todoService.deleteTodo(todoId);
    return {
      id: todoId,
      message: "Todo has been deleted successfully",
    };
  }
}
