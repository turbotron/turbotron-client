import { turbotron } from './styles/turbotron.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

//document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <AppContainer>
      <App store={store}/>
    </AppContainer>,
    document.getElementById('mount')
  );
// });

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store}/>
      </AppContainer>,
      document.getElementById('mount')
    );
  });
}
