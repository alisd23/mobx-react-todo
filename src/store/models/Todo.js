export default class Todo {
  constructor({ title, id }) {
    this.title = title;
    this.id = id;
    this.isCompleted = false;
  }

  toggleCompleted(completed = !this._isCompleted) {
    this._isCompleted = Boolean(completed);
  }
}
