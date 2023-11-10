import {Button, Modal, Text, View} from 'react-native';
import * as React from 'react';

function TrackWorkoutModal(props: any) {
  return (
    <Modal
      visible={props.isTrackWorkoutModalVisible}
      onRequestClose={() => props.setIsTrackWorkoutModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Enter your workout here</Text>
        <Button
          title="close"
          onPress={() => props.setIsTrackWorkoutModalVisible(false)}
        />
      </View>
    </Modal>
  );
}
export default TrackWorkoutModal;
