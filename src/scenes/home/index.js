import React, { Component } from 'react';
import { Text, View, Dimensions, Image, Animated, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { getPlaces, getPlacesRecommended } from '../../services/place/action';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window')
import styles from './styles';
import Player from '../player';


class App extends Component {

  static navigationOptions = {
    header: null,
  };

  static defaultProps = {
    draggableRange: {
      top: height - 50,
      bottom: 52,
      start: 0,
      end: 0,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      idPlace: 2,
      namePlace: "Galeria Cafe "
    }
    this.props.getPlaces();
    this.props.getPlacesRecommended();
/*     this.props.socket.instance.on('queue:2', (data => {
      console.log(this.props);
      this.props.getQueueSuccess(data)
    })); */
  }

  render() {
    const { places } = this.props;
/*     const { queue } = this.props; */
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="light-content" />
        <Player {...this.props} />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    places: state.places,
    /* socket: state.socket, */
 /*    queue: state.queue.queue, */
    placesRecommended: state.placesRecommended
  }
};

const mapDispatchToProps = {
  getPlaces: getPlaces,
/*   getQueueSuccess, */
  getPlacesRecommended
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;