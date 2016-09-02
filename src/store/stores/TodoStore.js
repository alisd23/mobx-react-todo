import { observable, computed, action } from 'mobx';
import uuid from 'uuid';
import Todo from 'store/models/Todo';
import FilterTypes from 'constants/FilterTypes';

class Todos {
  @observable todosMap = {};
  @observable filter = FilterTypes.ALL;
  @observable search = '';

  @computed get todos() {
    return Object.keys(this.todosMap).map(id => this.todosMap[id]);
  }
  @computed get searchedTodos() {
    return this.todos.filter(
      todo => todo.title.match(new RegExp(this.search, 'i'))
    );
  }
  @computed get filteredTodos() {
    switch (this.filter) {
      case FilterTypes.ALL:
        return this.searchedTodos;
      case FilterTypes.ACTIVE:
        return this.searchedTodos.filter(todo => !todo.isCompleted);
      case FilterTypes.COMPLETED:
        return this.searchedTodos.filter(todo => todo.isCompleted);
      default:
        return this.searchedTodos;
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
  changeFilter(filter) {
    if (FilterTypes[filter]) {
      this.filter = filter;
    }
  }

  @action
  changeSearch(term) {
    this.search = term;
  }
}

export default Todos;
