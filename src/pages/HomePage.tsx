import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomePage</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

export default HomeScreen;
