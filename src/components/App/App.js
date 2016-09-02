import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';
import TodoFilter from 'components/TodoFilter';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-header'>
          <h1 className='app-title'>Sick Todo List</h1>
        </div>
        <div className='app-body'>
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </div>
        <DevTools />
      </div>
    );
  }
}

export default App;
