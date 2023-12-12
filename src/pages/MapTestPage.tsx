import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useRef} from 'react'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  map: {
    flex: 0.9,
  },
  buttons: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function MapTestPage() {
  const DEFAULT_PADDING = {
    top: 20000,
    right: 20000,
    bottom: 20000,
    left: 20000,
  };

  const mapViewRef = useRef<MapView>(null); //vytvoření reference na MapView
  const argoCoords = {
    latitude: 48.97406661069083,
    longitude: 14.472992967998712,
  };
  async function fitARGOMarker() {
    mapViewRef.current?.fitToCoordinates([argoCoords], {
      edgePadding: DEFAULT_PADDING,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapView
          ref={mapViewRef} //přiřazení reference
          provider={PROVIDER_GOOGLE}
          style={styles.mapView}
          initialRegion={{
            latitude: 48.97406661069083,
            longitude: 14.472992967998712,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: 48.97406661069083,
              longitude: 14.472992967998712,
            }}
            title={'ARGO22'}
            description={'office'}
          />
        </MapView>
      </View>
      <View style={styles.buttons}>
        <Button title={'Locate ARGO22'} onPress={fitARGOMarker} />
        <Button title={'Button2'} />
      </View>
    </View>
  );
}

export default MapTestPage;
