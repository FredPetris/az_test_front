import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from 'components/AppContainer';
import './index.css';
import store from './storage';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('components/AppContainer', () => {
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      document.getElementById('root'),
    );
  });
}
