import TodoItem from "./model/TodoItem";
import TodoList from "./model/TodoList";
import TodoListView from "./view/TodoListView";
import "./css/style.css";

function init() {
  const todosView = TodoListView.getTodoListViewInstance();
  const todoList = TodoList.getTodoListInstance();
  const todoForm = document.getElementById("todo-entry-form");

  todoForm?.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const input = document.getElementById("todo-input") as HTMLFormElement;
    const txtIn: string = input.value.length ? input.value.trim() : "";

    if (!txtIn) {
      return;
    }

    const todoId = todoList.todos.length
      ? parseInt(todoList.todos[todoList.todos.length - 1].id) + 1
      : 1;

    const newTodo = new TodoItem(todoId.toString(), txtIn);

    todoList.addTodo(newTodo);
    todosView.render(todoList);
  });

  const clearBtn = document.getElementById(
    "clear-todos-btn"
  ) as HTMLButtonElement;

  clearBtn.addEventListener("click", () => {
    todoList.clearTodos();
    todosView.clear();
  });

  todoList.load();
  todosView.render(todoList);
}

document.addEventListener("DOMContentLoaded", init);
