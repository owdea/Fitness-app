import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Button, Platform} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useRef, useState} from 'react';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
} from 'react-native-permissions'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

let mapData = [
  {
    coordinate: {
      latitude: 48.97406661069083,
      longitude: 14.472992967998712,
    },
    title: 'ARGO22',
    description: 'office',
  },
];
function MapTestPage() {
  const [positionMarker, setPositionMarker] = useState({
    latitude: 0,
    longitude: 0,
    title: '',
    description: '',
  });
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

  const requestPermission = () => {
    if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION).then(result => {
        switch (result) {
          case 'unavailable': //featura není dostupná
            console.log(
              'ANDROID: This feature is not avalaible on this device',
            );
            break;
          case 'granted': //už udělená
            console.log('ANDROID: This permission has been already granted');
            Geolocation.getCurrentPosition(info => {
              console.log(info.coords);
              setPositionMarker({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                title: 'You',
                description: 'Your current position',
              });
            });
            mapViewRef.current?.fitToCoordinates(
              [
                {
                  latitude: positionMarker.latitude,
                  longitude: positionMarker.longitude,
                },
              ],
              {
                edgePadding: DEFAULT_PADDING,
              },
            );
            break;
          case 'denied': //odmítnutá ale znovu vyžádatelná featura
            console.log(
              'ANDROID: This permission was denied, you may request it again',
            );
            request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION).then(
              requestResult => {
                console.log(requestResult);
              },
            );
            break;
          case 'blocked': //povolitelná pouze v nastavení
            console.log(
              'ANDROID: This permission was blocked, you may not request it again',
            );
            break;
        }
      });
    } else {
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        switch (result) {
          case 'unavailable': //nedostupné
            console.log('IOS: This feature is unavailable on this device');
            break;
          case 'granted': //už udělené
            console.log('IOS: This permission is has been already granted');
            Geolocation.getCurrentPosition(info => {
              console.log(info.coords);
              setPositionMarker({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                title: 'You',
                description: 'Your current position',
              });
            });
            mapViewRef.current?.fitToCoordinates(
              [
                {
                  latitude: positionMarker.latitude,
                  longitude: positionMarker.longitude,
                },
              ],
              {
                edgePadding: DEFAULT_PADDING,
              },
            );
            break;
          case 'limited': //povoleno s omezením
            console.log(
              'IOS: This permission has been granted but with limitation',
            );
            break;
          case 'blocked': //zablokováno => do nastavení?
            console.log(
              'IOS: This permission is blocked, you have to go to settings',
            );
            openSettings(); //přidat tabulku na otevření nastavení
            break;
          case 'denied': //neuděleno, vyžádání a vypsání výsledku
            console.log('IOS: This permission can be requested');
            request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
              requestResult => {
                console.log(requestResult);
              },
            );
            break;
        }
      });
    }
  };

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
          <Marker
            coordinate={{
              latitude: positionMarker.latitude,
              longitude: positionMarker.longitude,
            }}
            title={positionMarker.title}
            description={positionMarker.description}
          />
        </MapView>
      </View>
      <View style={styles.buttons}>
        <Button title={'Locate ARGO22'} onPress={fitARGOMarker} />
        <Button title={'Locate ME'} onPress={requestPermission} />
      </View>
    </View>
  );
}

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

export default MapTestPage;
