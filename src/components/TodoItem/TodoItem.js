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
        <div className='todo-item-title'>
          <input
            className='form-control'
            value={todo.title}
            onChange={(e) => todo.setTitle(e.target.value)}
          />
          <div className='input-highlight'></div>
        </div>
        <div className='options'>
          <TodoCompletedButton
            onToggle={() => todo.toggleCompleted()}
            isCompleted={todo.isCompleted}
          />
          <TodoDeleteButton onDelete={() => todoStore.deleteTodo(todo.id)} />
        </div>
      </div>
    );
  }
}

export default TodoItem;
