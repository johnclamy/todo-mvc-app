export interface Todo {
  id: string;
  task: string;
  isChecked: boolean;
}

export interface Todos {
  todos: Todo[];
  load(): void;
  save(): void;
  clearTodos(): void;
  addTodo(todo: Todo): void;
  delTodo(id: string): void;
}

export interface TodosView {
  ul: HTMLUListElement;
  clear(): void;
  render(todos: Todos): void;
}
