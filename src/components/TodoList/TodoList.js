import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoItem from 'components/TodoItem';
import './TodoList.scss';

@inject('todoStore')
@observer
class TodoList extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <div>
        <div className='todo-list'>
          <ReactCSSTransitionGroup
            transitionName='todo'
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {
              todoStore.filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                />
              ))
            }
          </ReactCSSTransitionGroup>
        </div>
        {
          !todoStore.filteredTodos.length &&
            <h3 className='text-xs-center m-t-1'>
              No todos
            </h3>
        }
      </div>
    );
  }
}

export default TodoList;
