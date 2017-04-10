import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TurbotronClient from './TurbotronClient';
import DevTools from './DevTools';

class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <TurbotronClient />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
export default App;
