import { Body, Controller, Get, Path, Post, Route } from "tsoa";
import { Todo } from "../models/todo";

let todos: Todo[] = [{ id: 1, title: "Learn TSOA", completed: false }];

@Route("todos")
export class TodoController extends Controller {
  @Get("/")
  public async listTodos(): Promise<Todo[]> {
    return todos;
  }

  @Get("/{id}")
  public async getTodo(@Path() id: number): Promise<Todo | null> {
    return todos.find((t) => t.id === id) || null;
  }

  @Post("/")
  public async createTodo(@Body() body: { title: string }): Promise<Todo> {
    const newTodo: Todo = {
      id: todos.length + 1,
      title: body.title,
      completed: false,
    };
    todos.push(newTodo);
    return newTodo;
  }
}
