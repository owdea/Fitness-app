import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  request,
  PERMISSIONS,
  check,
  Permission,
  openSettings,
} from 'react-native-permissions';

function PermissionTest() {
  const requestPermission = (permission: Permission) => {
    if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.CAMERA).then(result => {
        switch (result) {
          case 'unavailable': //featura není dostupná
            console.log(
              'ANDROID: This feature is not avalaible on this device',
            );
            break;
          case 'granted': //už udělená
            console.log('ANDROID: This permission has been already granted');
            break;
          case 'denied': //odmítnutá ale znovu vyžádatelná featura
            console.log(
              'ANDROID: This permission was denied, you may request it again',
            );
            request(permission).then(requestResult => {
              console.log(requestResult);
            });
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
            break;
          case 'limited': //povoleno s omezením
            console.log(
              'IOS: This permission has been granted but with limitation',
            );
            break;
          case 'blocked': //zablokováno => nějak do nastavení?
            console.log(
              'IOS: This permission is blocked, you have to go to settings',
            );
            openSettings(); //přidat tabulku na otevření nastavení
            break;
          case 'denied': //neuděleno, vyžádání a vypsání výsledku
            console.log('IOS: This permission can be requested');
            request(permission).then(requestResult => {
              console.log(requestResult);
            });
            break;
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.item}>Try permissions</Text>
      <Button
        title="request permissions"
        onPress={() => {
          if (Platform.OS === 'android') {
            requestPermission(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION);
          } else if (Platform.OS === 'ios') {
            requestPermission(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default PermissionTest;
