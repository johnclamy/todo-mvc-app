import { Todo, Todos } from "../interface";
import TodoItem from "./TodoItem";

export default class TodoList implements Todos {
  private static instance = new TodoList();
  private constructor(private _todos: Todo[] = []) {}

  static getTodoListInstance() {
    return TodoList.instance;
  }

  get todos() {
    return this._todos;
  }

  load() {
    type ParsedTodos = { _id: string; _task: string; _isChecked: boolean }[];
    const storedTodos = window.localStorage.getItem("my-todos");

    if (typeof storedTodos !== "string") {
      return;
    }

    const parsedTodos: ParsedTodos = JSON.parse(storedTodos);

    parsedTodos.forEach((todo) => {
      const newTodo = new TodoItem(todo._id, todo._task, todo._isChecked);
      TodoList.instance.addTodo(newTodo);
    });
  }

  save() {
    window.localStorage.setItem("my-todos", JSON.stringify(this._todos));
  }

  addTodo(todo: Todo) {
    this._todos.push(todo);
    this.save();
  }

  delTodo(todoId: string) {
    this._todos = this._todos.filter((todo) => todo.id !== todoId);
    this.save();
  }

  clearTodos() {
    this._todos = [];
    this.save();
  }
}
