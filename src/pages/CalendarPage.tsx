import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';

function CalendarPage({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Exercise List Page</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go to home" />
    </View>
  );
}

export default CalendarPage;
