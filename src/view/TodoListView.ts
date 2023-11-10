import TodoList from "../model/TodoList";
import { TodosView } from "../interface";

export default class TodoListView implements TodosView {
  ul: HTMLUListElement;
  private static instance: TodoListView = new TodoListView();
  private constructor() {
    this.ul = document.getElementById("todos") as HTMLUListElement;
  }

  static getTodoListViewInstance() {
    return TodoListView.instance;
  }

  clear() {
    this.ul.innerHTML = "";
  }

  render(todoList: TodoList) {
    this.clear();
    todoList.todos.forEach((todo) => {
      const id = todo.id;
      const li = document.createElement("li") as HTMLLIElement;
      const box = document.createElement("input") as HTMLInputElement;
      const lbl = document.createElement("label") as HTMLLabelElement;
      const btn = document.createElement("button") as HTMLButtonElement;

      box.id = id;
      box.type = "checkbox";
      box.checked = todo.isChecked;
      lbl.htmlFor = id;
      lbl.textContent = todo.task;
      btn.className = "btn";
      btn.textContent = "X";
      li.className = "todo";
      li.append(box);
      li.append(lbl);
      li.append(btn);
      this.ul.append(li);

      box.addEventListener("change", () => {
        todo.isChecked = !todo.isChecked;
        todoList.save();
      });

      btn.addEventListener("click", () => {
        todoList.delTodo(todo.id);
        this.render(todoList);
      });
    });
  }
}
