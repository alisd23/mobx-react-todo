import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import FilterTypes from 'constants/FilterTypes';
import TodoFilterItem from './TodoFilterItem';
import './TodoFilter.scss';

@inject('todoStore')
@observer
class TodoFilter extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <div className='filter-toolbar'>
        <ul className='filters list-unstyled'>
          {
            Object.keys(FilterTypes).map(type => (
              <TodoFilterItem
                key={type}
                filterType={type}
                onClick={() => this.onFilterChange(type)}
                isActive={type === todoStore.filter}
              />
            ))
          }
        </ul>
        <div className='search'>
          <input
            className='form-control'
            placeholder='Search...'
            value={todoStore.search}
            onChange={(e) => this.onSearchChange(e)}
          />
        </div>
      </div>
    );
  }

  onFilterChange(filter) {
    this.props.todoStore.changeFilter(filter);
  }
  onSearchChange(e) {
    this.props.todoStore.changeSearch(e.target.value);
  }
}

export default TodoFilter;
