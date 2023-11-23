import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Linking} from 'react-native';

function Module02Page() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomePage</Text>
      <Button
        onPress={() => {
          Linking.openURL('tel:+420731215835');
        }}
        title="Call me"
      />
    </View>
  );
}

export default Module02Page;
