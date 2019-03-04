
import React, { Component } from 'react';
import { Text, View, } from 'react-native'

import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return <AppContainer />;
  }
}
