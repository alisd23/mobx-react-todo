import { observable, computed, action } from 'mobx';
import uuid from 'uuid';
import Todo from 'store/models/Todo';

class Todos {
  @observable todosMap = {};
  @observable filter = 'ALL';

  @computed get todos() {
    console.log(Object.keys(this.todosMap).map(id => this.todosMap[id]))
    return Object.keys(this.todosMap).map(id => this.todosMap[id]);
  }

  @action
  addTodo(title) {
    const id = uuid.v4();
    this.todosMap = {
      [id]: new Todo({title, id}),
      ...this.todosMap
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
}

export default Todos;
