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

/*function Module02Page() {
  interface OpenURLButtonProps {
    url: string;
    title: string;
  }
  const OpenURLButton = ({url, title}: OpenURLButtonProps) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={title} onPress={handlePress} />;
  };
  implementace:
<OpenURLButton url="mailto:ondrej.pelcl@argo22.com" text="Mail me"/>
  */
