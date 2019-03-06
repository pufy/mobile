import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SlidingPanelPlaces extends Component {
  render() {
    return (
      <View>
{/*         <SlidingUpPanel
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
              <View style={{ backgroundColor: "#C4C4C4", width: 28, height: 5, borderRadius: 100, marginTop: 10 }}></View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}
                  onPress={() => {
                    console.log("Hey!!")
                  }}
                >
                  <Text style={{ color: '#333', fontWeight: 'bold' }}>Sitios cercanos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}
                  onPress={() => {
                    console.log("Hey!!")
                  }}
                >
                  <Text style={{ color: '#333', fontWeight: 'bold' }}>Recomendado</Text>
                </TouchableOpacity>
              </View>
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
                          onPress={() => {
                            this.props.socket.instance.removeListener(`queue:2`, (data => {
                              console.log(data);
                              this.props.socket.instance.on(`queue:${item.id}`, this.props.getQueueSuccess(data))
                            }))
                            this.setState({ idPlace: item.id, namePlace: item.name });
                          }}
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
        </SlidingUpPanel> */}
      </View>
    );
  }
}