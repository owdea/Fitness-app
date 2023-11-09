import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text, Modal} from 'react-native';
import {useState} from 'react';

function TrackWorkoutScreen({navigation}: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Track Workout page</Text>
      <Button title="Track workout" onPress={() => setIsModalVisible(true)} />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet">
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Enter your workout here</Text>
          <Button title="close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

export default TrackWorkoutScreen;
