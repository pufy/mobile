import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, TextInput, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel'
import { getPlaces, getPlacesRecommended } from '../../services/place/action';
import { navigateToPlayer } from '../../navigation/NavigationHelpers';

const { height, width } = Dimensions.get('window')
class SlidingPanelPlaces extends Component {

  state = { view: 'near'  };

  static defaultProps = {
    draggableRange: {
      top: height - 50,
      bottom: 52,
      start: 0,
      end: 0,
    }
  }
  _draggedValue = new Animated.Value(300)

  async componentWillMount() {
    this.props.getPlaces();
    this.props.getPlacesRecommended();
  }

  render() {
    const { places } = this.props;
    const { view } = this.state;
    
    return (
      <SlidingUpPanel
        visible
        startCollapsed
        transitionTo
        minimumDistanceThreshold={40}
        allowMomentum={false}
        animatedValue={this._draggedValue}
        onDragStart={c => {
          this.props.draggableRange.start = c;
        }}
        onDragEnd={c => {
          positio = (this.props.draggableRange.start + height / 8 < c) ? height : (this.props.draggableRange.start > c + height / 8) ? 0 : height;
          this.setState.panel = this._panel;
          this._panel.transitionTo(positio)
        }}
        showBackdrop={false}

        ref={c => (this._panel = c)}
        draggableRange={this.props.draggableRange}
      >
        <View style={styles.panel}>
          <View style={styles.panelHeader}>
            <View style={{ backgroundColor: "#C4C4C4", width: 28, height: 5, borderRadius: 100, marginTop: 10 }}></View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}
                onPress={() => this.setState({ view: 'near' })}>
                <Text style={{ color: '#333', fontWeight: 'bold' }}>Sitios cercanos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}
                onPress={() => this.setState({ view: 'recommended' }) }>
                <Text style={{ color: '#333', fontWeight: 'bold' }}>Recomendado</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerDrop}>
            {view === 'near' && places && places.places &&
              <FlatList
                data={places.places}
                renderItem={({ item }) =>
                  <View key={`key-${item.id}`} style={{ backgroundColor: '#fff', flexDirection: 'row', marginBottom: 10, paddingTop: 10, paddingBottom: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 1 } }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10, marginRight: 10, width: 50 }} source={{ uri: item.photo }} />
                    <View style={{ paddingLeft: 0, flex: 1 }}>
                      <Text style={{ fontSize: 14, color: '#333' }}>{item.name}</Text>
                      <Text style={{ fontSize: 12, fontWeight: '100', color: '#666' }}>{item.type_name} - 1,6km</Text>
                      <Text style={{ color: '#18B127', fontWeight: '100', fontSize: 12 }}>Abierto</Text>
                    </View>
                    <View style={{ width: 120, justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity
                        style={{ borderWidth: 1, borderColor: '#666', borderRadius: 25, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                        onPress={() => {
                          this._panel.transitionTo(0);
                          setTimeout(() => navigateToPlayer({ place: item }), 250);
                        }}
                      >
                        <Text style={{ color: '#555', fontSize: 12 }}>Ver</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              />
            }
            {view === 'recommended' && places && places.placesRecommended &&
              <FlatList
                data={places.placesRecommended}
                renderItem={({ item }) =>
                  <View key={`key-${item.id}`} style={{ backgroundColor: '#fff', flexDirection: 'row', marginBottom: 10, paddingTop: 10, paddingBottom: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 1 } }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10, marginRight: 10, width: 50 }} source={{ uri: item.photo }} />
                    <View style={{ paddingLeft: 0, flex: 1 }}>
                      <Text style={{ fontSize: 14, color: '#333' }}>{item.name}</Text>
                      <Text style={{ fontSize: 12, fontWeight: '100', color: '#666' }}>{item.type_name} - 1,6km</Text>
                      <Text style={{ color: '#18B127', fontWeight: '100', fontSize: 12 }}>Abierto</Text>
                    </View>
                    <View style={{ width: 120, justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity
                        style={{ borderWidth: 1, borderColor: '#666', borderRadius: 25, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                        onPress={() => {
                          this._panel.transitionTo(0);
                          setTimeout(() => navigateToPlayer({ place: item }), 250);
                        }}
                      >
                        <Text style={{ color: '#555', fontSize: 12 }}>Ver</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              />
            }
          </View>
        </View>
      </SlidingUpPanel>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    places: state.places,
    placesRecommended: state.placesRecommended
  }
};

const mapDispatchToProps = {
  getPlaces: getPlaces,
  getPlacesRecommended
};

SlidingPanelPlaces = connect(mapStateToProps, mapDispatchToProps)(SlidingPanelPlaces);

export default SlidingPanelPlaces;