import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoItem from 'components/TodoItem';
import './TodoList.scss';

@inject('todoStore')
@observer
class TodoList extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <div className='todo-list'>
        {
          todoStore.filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))
        }
      </div>
    );
  }
}

export default TodoList;
