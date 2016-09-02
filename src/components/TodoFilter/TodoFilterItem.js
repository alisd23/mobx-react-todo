import React from 'react';
import classnames from 'classnames';
import changeCase from 'change-case';

export default ({ isActive, onClick, filterType }) => {
  const classes = classnames({
    'is-active': isActive
  }, 'filter-item');

  return (
    <li
      onClick={onClick}
      className={classes}
    >
      {changeCase.title(filterType)}
    </li>
  )
}
