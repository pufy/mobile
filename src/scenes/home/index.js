import React, { Component } from 'react';
import { Text, View, Dimensions, Image, Animated, StatusBar, FlatList, TextInput, StyleSheet } from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window')

var stylesTwo = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 60
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  containerDrop: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  panelHeader: {
    height: 50,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    /* shadowOffset: { width: 0, height: 0 }, */

  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1
  }
}
type Props = {};
export default class App extends Component<Props> {

  static navigationOptions = {
    header: null,
  };

  static defaultProps = {
    draggableRange: {
      top: height - 90,
      bottom: 52,
      start: 0,
      end: 0,
    }
  }

  _panel;
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="light-content" />
        <LinearGradient locations={[0, 0.08, 0.11,0.16, 0.27]} colors={['#B01D1D', '#C55A5A','#CC6F6F', '#DB9898','#fff']} style={stylesTwo.linearGradient}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0)', flexDirection: "row", textAlign: "center", justifyContent: "center", paddingTop: 10 }}>
            <Text style={styles.title}>Galeria Cafe </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100, marginTop: 20 }}
              source={{ uri: 'https://images.genius.com/ea84df2da94830ad52a115b1c0cee660.953x953x1.jpg' }}
            />
            <Text style={{ fontSize: 20, fontWeight: '600' ,color: '#333333', marginBottom:5, marginTop: 8}}>Aquelarre </Text>
            <Text style={{ color: '#666', fontWeight: '100', marginBottom:8, fontSize: 16 }}>Mago de oz </Text>
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
          <Text style={stylesTwo.buttonText}>
            Sign in with Facebook
        </Text>
        </LinearGradient>
        <View style={{ alignItems: 'center' }}>

          <TextInput
            onPress={() => this.setState({ visible: true })}
            style={{ height: 30, borderWidth: 1, color: "#666", borderColor: 'rgba(51,51,51,.24)', marginTop: 15, marginBottom: 15, borderRadius: 100, width: 300, textAlign: 'center' }}
            placeholderTextColor={'#666'}
            placeholder="Busca tu canción o artista"
            onChangeText={(text) => this.setState({ text })}
          />
        </View>
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
              <Text>Bottom Sheet Content</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

