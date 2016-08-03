import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoDeleteButton from './TodoDeleteButton';
import './TodoItem.scss';

@inject('todoStore')
@observer
class TodoItem extends Component {
  render() {
    const { todo, todoStore } = this.props;
    console.log(this.props);
    return (
      <div className='todo-item'>
        <span className='todo-item-title'>
          {todo.title}
        </span>
        <div className='options'>
          <TodoDeleteButton onDelete={() => todoStore.deleteTodo(todo.id)}/>
        </div>
      </div>
    );
  }
}

export default TodoItem;
