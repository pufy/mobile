import React, { Component } from 'react';
import { View, Text, Image, FlatList, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { getQueueSuccess } from "../../services/queue/action";
import { connectClientId } from "../../services/socket/action";
class Player extends Component {


  state = {
    idPlace: 2,
    namePlace: "Galeria Cafe "
  }
  async componentWillMount() {
    this.props.connectClientId(2);
  }
  componentDidUpdate(prevProps) {
    if (this.props.socket !== prevProps.socket) {
      this.props.socket.socket.on(`queue:${this.props.navigation.getParam('itemId', 'NO-ID')}`, (data => {
        console.log(data, "cambio");
        this.props.getQueueSuccess(data)
      }))
      console.log(this.props.socket);
    }
    if (this.props.navigation.getParam('itemId', 'NO-ID') != prevProps.navigation.getParam('itemId', 'NO-ID')) {
      this.props.connectClientId(this.props.navigation.getParam('itemId'));
      console.log(this.props.navigation.getParam('itemId'))
    }
  }

  render() {
    const { queue } = this.props;
    const song = [];
    const songs = (queue != undefined) ? song.push(queue) : queue;
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    console.log(songs);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#B01D1D" barStyle="light-content" />
        <LinearGradient locations={[0, 0.08, 0.11, 0.16, 0.27]} colors={['#B01D1D', '#C55A5A', '#CC6F6F', '#DB9898', '#fff']} style={styles.linearGradient}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0)', flexDirection: "row", textAlign: "center", justifyContent: "space-between", alignItems: 'center', marginTop: 20, paddingTop: 10 }}>
            <TouchableOpacity
              style={{ color: '#fff' }}
              onPress={() => {
                this.props.navigation.goBack()
                console.log("<atras");
              }}
            >
              <Text style={{ color: '#fff', fontSize: 14 }}>atras</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{this.state.namePlace}</Text>
            <Text style={styles.title}>...</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 150, height: 150, marginTop: 20 }}
              source={{ uri: 'https://images.genius.com/ea84df2da94830ad52a115b1c0cee660.953x953x1.jpg' }}
            />
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#333333', marginBottom: 5, marginTop: 8 }}>Aquelarre </Text>
            <Text style={{ color: '#666', fontWeight: '100', marginBottom: 8, fontSize: 16 }}>Mago de oz </Text>
          </View>
          {queue &&
            <FlatList
              data={queue}
              renderItem={({ item }) =>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginBottom: 5, marginTop: 5 }}>
                  <Image style={{ width: 50, height: 50 }} source={{ uri: item.image[0] }} />
                  <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, color: '#333', fontWeight: 'normal' }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, color: '#666' }}>{item.artist[0]}</Text>
                  </View>
                </View>
              }
            />
          }
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
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    socket: state.socket,
    queue: state.queue.queue
  }
};

const mapDispatchToProps = {
  getQueueSuccess,
  connectClientId
};

Player = connect(mapStateToProps, mapDispatchToProps)(Player);

export default Player;