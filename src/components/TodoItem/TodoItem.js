import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoDeleteButton from './TodoDeleteButton';
import TodoCompletedButton from './TodoCompletedButton';
import './TodoItem.scss';
import classnames from 'classnames';

@inject('todoStore')
@observer
class TodoItem extends Component {
  render() {
    const { todo, todoStore } = this.props;
    const classes = classnames({
      'completed': todo.isCompleted
    }, 'todo-item')

    return (
      <div className={classes}>
        <span className='todo-item-title'>
          {todo.title}
        </span>
        <div className='options'>
          <TodoDeleteButton
            onDelete={() => todoStore.deleteTodo(todo.id)}/>
          <TodoCompletedButton
            onToggle={() => todoStore.toggleCompleted(todo.id)}/>
        </div>
      </div>
    );
  }
}

export default TodoItem;
