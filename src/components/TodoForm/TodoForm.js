import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './TodoForm.scss';

@inject('todoStore')
@observer
class TodoForm extends Component {
  state = {
    newTitle: ''
  };

  render() {
    return (
      <div className='todo-form'>
        <input
          className='form-control'
          value={this.state.newTitle}
          onChange={(e) => this.changeTitle(e)}
        />
        <button
          className='btn btn-primary'
          onClick={() => this.onAddClick()}
        >
          Add todo
        </button>
      </div>
    );
  }

  onAddClick() {
    this.props.todoStore.addTodo(this.state.newTitle);
    this.setState({
      newTitle: ''
    })
  }
  changeTitle(e) {
    this.setState({
      newTitle: e.target.value
    })
  }
}

export default TodoForm;
