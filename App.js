
import React, { Component } from 'react';
import { store } from './src/store';
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )

  }
}
