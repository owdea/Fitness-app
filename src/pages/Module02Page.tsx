import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Linking, Image, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    margin: 20,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '80%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
function Module02Page() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomePage</Text>
      <Image
        source={require('../assets/argo-pfp.png')}
        style={styles.tinyLogo}
      />
      <View style={styles.buttonRow}>
        <Button
          onPress={() => {
            Linking.openURL('tel:+420731215835');
          }}
          title="Call me"
        />
        <Button
          onPress={() => {
            Linking.openURL('mailto:ondrej.pelcl@argo22.com');
          }}
          title="Email me"
        />
      </View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    </View>
  );
}

export default Module02Page;
