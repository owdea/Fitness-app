import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

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
  button: {
    padding: 10,
  },
});

let region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};
function MapTestPage() {
  // @ts-ignore
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.mapView}
          region={region}
        />
      </View>
      <View style={styles.buttons}>
        <Button title={'button1'} />
        <Button title={'Button2'} />
      </View>
    </View>
  );
}

export default MapTestPage;
