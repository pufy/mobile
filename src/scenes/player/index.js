import React, { Component } from 'react';
import { View, Text, Image, FlatList, TextInput} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { getQueueSuccess } from "../../services/queue/action";
class Player extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idPlace: 2,
      namePlace: "Galeria Cafe "
    }
    this.props.socket.instance.on('queue:2', (data => {
      this.props.getQueueSuccess(data)
    }));
  }

  render() {
    const { queue } = this.props;
    return (
      <LinearGradient locations={[0, 0.08, 0.11, 0.16, 0.27]} colors={['#B01D1D', '#C55A5A', '#CC6F6F', '#DB9898', '#fff']} style={styles.linearGradient}>
        <View style={{ backgroundColor: 'rgba(0,0,0,0)', flexDirection: "row", textAlign: "center", justifyContent: "center", paddingTop: 10 }}>
          <Text style={styles.title}>{this.state.namePlace}</Text>
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
  getQueueSuccess
};

Player = connect(mapStateToProps, mapDispatchToProps)(Player);

export default Player;