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
      <form
        className='todo-form'
        onSubmit={(e) => this.onFormSubmit(e)}
      >
        <input
          className='form-control'
          value={this.state.newTitle}
          onChange={(e) => this.changeTitle(e)}
        />
        <button
          type="submit"
          className='btn btn-primary'
        >
          Add todo
        </button>
      </form>
    );
  }

  onFormSubmit(e) {
    e.preventDefault();
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
