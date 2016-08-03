import { observable } from 'mobx';

export default class Todo {
  @observable id;
  @observable title = '';
  @observable isCompleted = false;;

  constructor({ title, id }) {
    this.title = title;
    this.id = id;
  }

  toggleCompleted(completed = !this.isCompleted) {
    this.isCompleted = Boolean(completed);
  }
}
