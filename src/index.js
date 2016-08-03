import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from 'components/App/App';
import stores from 'store/stores';
import 'styles/index.scss';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
