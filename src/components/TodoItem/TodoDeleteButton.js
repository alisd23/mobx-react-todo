import React from 'react';

export default ({ onDelete }) => (
  <i
    className="fa fa-lg fa-times delete"
    aria-hidden="true"
    onClick={onDelete}
  ></i>
);
