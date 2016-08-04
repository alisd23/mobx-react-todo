import { observable, computed, action } from 'mobx';
import uuid from 'uuid';
import Todo from 'store/models/Todo';
import FilterTypes from 'constants/FilterTypes';

class Todos {
  @observable todosMap = {};
  @observable filter = FilterTypes.ALL;

  @computed get todos() {
    return Object.keys(this.todosMap).map(id => this.todosMap[id]);
  }
  @computed get filteredTodos() {
    switch (this.filter) {
      case FilterTypes.ALL:
        return this.todos;
      case FilterTypes.ACTIVE:
        return this.todos.filter(todo => !todo.isCompleted);
      case FilterTypes.COMPLETED:
        return this.todos.filter(todo => todo.isCompleted);
      default:
        return this.todos;
    }
  }

  @action
  addTodo(title) {
    const id = uuid.v4();
    this.todosMap = {
      ...this.todosMap,
      [id]: new Todo({title, id})
    };
  }

  @action
  deleteTodo(id) {
    const newTodos = { ...this.todosMap };
    delete newTodos[id];
    this.todosMap = newTodos;
  }

  @action
  toggleCompleted(id) {
    this.todosMap[id].toggleCompleted();
  }

  @action
  editTodoTitle(id, title) {
    this.todosMap[id].setTitle(title);
  }

  @action
  changeFilter(filter) {
    if (FilterTypes[filter]) {
      this.filter = filter;
    }
  }
}

export default Todos;
