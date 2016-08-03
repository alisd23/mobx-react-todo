import React from 'react';

export default ({ onToggle }) => (
  <i
    className="fa fa-lg fa-check complete"
    aria-hidden="true"
    onClick={onToggle}
  ></i>
);
