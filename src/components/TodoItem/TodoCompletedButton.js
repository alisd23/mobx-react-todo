import React from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default ({ onToggle, isCompleted }) => (
  <div
    className={classnames({ 'is-checked': isCompleted })}
    onClick={onToggle}
  >
    <ReactCSSTransitionGroup
      transitionName='fade'
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
      className='complete'
    >
      {
        isCompleted &&
          <i key='0' className="material-icons md-24">check</i>
      }
    </ReactCSSTransitionGroup>
  </div>
);
