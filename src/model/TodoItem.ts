import { Todo } from "../interface/index";

export default class TodoItem implements Todo {
  private constructor(
    private _id: string = "",
    private _task: string = "",
    private _isChecked: boolean = false
  ) {}

  get id() {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get task() {
    return this._task;
  }

  set task(task: string) {
    this._task = task;
  }

  get isChecked() {
    return this._isChecked;
  }

  set isChecked(checked: boolean) {
    this._isChecked = checked;
  }
}
