import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';

function ExcersiseListPage({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Excersise List Page</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go to home" />
    </View>
  );
}

export default ExcersiseListPage;
