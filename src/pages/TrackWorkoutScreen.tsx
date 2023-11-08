import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';

function TrackWorkoutScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Track Workout page</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go to home" />
    </View>
  );
}

export default TrackWorkoutScreen;
