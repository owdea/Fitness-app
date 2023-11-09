import {Button, Modal, Text, View} from 'react-native';
import * as React from 'react';

function RateWorkoutModal(props: any) {
  return (
    <Modal
      visible={props.isModalVisible}
      onRequestClose={() => props.setIsModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Rate your workout!</Text>
        <Button title="close" onPress={() => props.setIsModalVisible(false)} />
      </View>
    </Modal>
  );
}
export default RateWorkoutModal;
