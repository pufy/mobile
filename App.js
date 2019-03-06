
import React, { Component } from 'react';
import { store } from './src/store';
import { Provider } from 'react-redux'
import Navigator from './src/navigation';
import SlidingPanelPlaces from './src/components/SlidingPanelPlaces'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator/>
        <SlidingPanelPlaces  />
      </Provider>
    )

  }
}
