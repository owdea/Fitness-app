import {Button, Modal, Text, View} from 'react-native';
import * as React from 'react';

function ExerciseDetailModal(props: any) {
  return (
    <Modal
      visible={props.isExerciseDetailModalVisible}
      onRequestClose={() => props.setIsExerciseDetailModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Exercise details</Text>
        <Button
          title="close"
          onPress={() => props.setIsExerciseDetailModalVisible(false)}
        />
      </View>
    </Modal>
  );
}

export default ExerciseDetailModal;
