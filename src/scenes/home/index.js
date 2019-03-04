import React, { Component } from 'react';
import { Text, View, Dimensions, Image, Animated, StatusBar, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { getPlaces } from '../../services/place/action';
import SlidingUpPanel from 'rn-sliding-up-panel'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window')
import styles from './styles';

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
      count: 0,
    }
    this.props.getPlaces();
  }

  render() {
    const { places } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="light-content" />
        <LinearGradient locations={[0, 0.08, 0.11, 0.16, 0.27]} colors={['#B01D1D', '#C55A5A', '#CC6F6F', '#DB9898', '#fff']} style={styles.linearGradient}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0)', flexDirection: "row", textAlign: "center", justifyContent: "center", paddingTop: 10 }}>
            <Text style={styles.title}>Galeria Cafe </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100, marginTop: 20 }}
              source={{ uri: 'https://images.genius.com/ea84df2da94830ad52a115b1c0cee660.953x953x1.jpg' }}
            />
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#333333', marginBottom: 5, marginTop: 8 }}>Aquelarre </Text>
            <Text style={{ color: '#666', fontWeight: '100', marginBottom: 8, fontSize: 16 }}>Mago de oz </Text>
          </View>
          <FlatList
            data={[
              { key: '1', artist: 'Jarabe Palo de agua', song: 'El lado oscuro', image: 'https://i.ytimg.com/vi/6EEz7cEaX-k/0.jpg' },
              { key: '2', artist: 'Mago de oz', song: 'Hasta que el cuerpo aguante', image: 'https://images.genius.com/ea84df2da94830ad52a115b1c0cee660.953x953x1.jpg' },
              { key: '3', artist: 'Zoe', song: 'Luna', image: 'https://images.genius.com/5ee3a6ac787f4d6c6add4413f0836ed1.630x630x1.jpg' },
              { key: '4', artist: 'Kraken', song: 'Vestido de cristal', image: 'https://i.ytimg.com/vi/yo9WrDot5oQ/0.jpg' },
              { key: '5', artist: 'Bunbury', song: 'Aunque no sea conmigo', image: 'https://i.scdn.co/image/65cf8afe683a6f44eb1acb25a6dab990a22aa8d3' },

            ]}
            renderItem={({ item }) =>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginBottom: 5, marginTop: 5 }}>
                <Image style={{ width: 50, height: 50 }} source={{ uri: item.image }} />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, color: '#333', fontWeight: 'normal' }}>{item.song}</Text>
                  <Text style={{ fontSize: 12, color: '#666' }}>{item.artist}</Text>
                </View>
              </View>
            }
          />
          <View style={{ alignItems: 'center' }}>
            <TextInput
              onPress={() => this.setState({ visible: true })}
              style={{ height: 30, borderWidth: 1, color: "#666", borderColor: 'rgba(51,51,51,.24)', marginTop: 15, marginBottom: 15, borderRadius: 100, width: 300, textAlign: 'center' }}
              placeholderTextColor={'#666'}
              placeholder="Busca tu canción o artista"
              onChangeText={(text) => this.setState({ text })}
            />
          </View>
        </LinearGradient>
        <SlidingUpPanel
          visible
          startCollapsed
          transitionTo
          minimumDistanceThreshold={40}
          allowMomentum={false}
          onDragStart={c => {
            this.props.draggableRange.start = c;
            console.log(c, "inicio")
          }}
          onDragEnd={c => {
            positio = (this.props.draggableRange.start + height / 8 < c) ? height : (this.props.draggableRange.start > c + height / 8) ? 0 : height;
            console.log(c, "fin", this.props.draggableRange.start);
            this._panel.transitionTo(positio)
          }}
          showBackdrop={false}

          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
        >
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <View style={{ backgroundColor: "#C4C4C4", width: 28, height: 5, borderRadius: 100, marginBottom: 5 }}></View>
              <Text style={{ color: '#333', fontWeight: 'bold' }}>Sitios cercanos</Text>
            </View>
            <View style={styles.containerDrop}>
              {places != undefined && places.places != undefined &&
                <FlatList
                  data={places.places}
                  renderItem={({ item }) =>
                    <View style={{ backgroundColor: '#fff', flexDirection: 'row', marginBottom: 10, paddingTop: 10, paddingBottom: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 1 } }}>
                      <Image style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10, marginRight: 10, width: 50 }} source={{ uri: "https://www.zonavip.co/logos-aliados/the-rock-center.jpg" }} />
                      <View style={{ paddingLeft: 0, flex: 1 }}>
                        <Text style={{ fontSize: 14, color: '#333' }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '100', color: '#666' }}>{item.type_name} - 1,6km</Text>
                        <Text style={{ color: '#18B127', fontWeight: '100', fontSize: 12 }}>Abierto</Text>
                      </View>
                      <View style={{ width: 120, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                          style={{ borderWidth: 1, borderColor: '#666', borderRadius: 25, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                          onPress={() => { console.log(("hola")) }}
                        >
                          <Text style={{ color: '#555', fontSize: 12 }}>Reproducciendo</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                />
              }
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    places: state.places
  }
};

const mapDispatchToProps = {
  getPlaces: getPlaces
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;