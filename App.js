
import React, { Component } from 'react';
import { store } from './src/store';
import { Provider } from 'react-redux'
import Navigator from './src/navigation';


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )

  }
}
