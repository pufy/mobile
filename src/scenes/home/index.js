import React, { Component } from 'react';
import { Text, View, Dimensions, Image, Animated, StatusBar, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux';
import styles from './styles';
import Player from '../player';
import SlidingPanelPlaces from '../../components/SlidingPanelPlaces'

class App extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="light-content" />
        <Player {...this.props} />
        <SlidingPanelPlaces {...this.props}/>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;