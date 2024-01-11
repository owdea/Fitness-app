import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Button, Linking, Image, StyleSheet} from 'react-native';

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
    </View>
  );
}

export default Module02Page;
