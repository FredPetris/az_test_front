import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import groceriesApp from './reducers';
import AppContainer from 'components/AppContainer';
import './index.css';

const store = createStore(groceriesApp);

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
