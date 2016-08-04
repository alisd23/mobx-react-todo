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
    );
  }

  onFilterChange(filter) {
    this.props.todoStore.changeFilter(filter);
  }
}

export default TodoFilter;
