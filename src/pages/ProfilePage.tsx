import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View} from 'react-native';

function ProfilePage() {
  return (
    <View
      style={{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title={'Open Camera'} />
      <Button title={'Choose from gallery'} />
    </View>
  );
}

export default ProfilePage;
