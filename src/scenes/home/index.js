import React, { Component } from 'react';
import { Text, View, Dimensions, Image, Animated, StatusBar, TextInput, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import { connect } from 'react-redux';
import styles from './styles';
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
        <StatusBar backgroundColor="#B01D1D" barStyle="dark-content" />
        <ImageBackground source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1551866533/Bitmap.png' }} style={{ width: '100%', height: '100%' }}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0)', flexDirection: "row", textAlign: "center", justifyContent: "center", paddingTop: 10 }}>
            <Text style={styles.title}>Pufy</Text>
          </View>
        </ImageBackground>
      </View >
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