import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

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

let region = {
  latitude: 48.97406661069083,
  longitude: 14.472992967998712,
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
          region={region}>
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
        <Button title={'button1'} />
        <Button title={'Button2'} />
      </View>
    </View>
  );
}

export default MapTestPage;
