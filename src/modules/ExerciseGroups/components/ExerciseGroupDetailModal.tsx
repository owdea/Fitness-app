import {Button, Modal, Text, View} from 'react-native';
import * as React from 'react';

function ExerciseGroupDetailModal(props: any) {
  return (
    <Modal
      visible={props.isExerciseGroupDetailModalVisible}
      onRequestClose={() => props.setIsExerciseGroupDetailModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Exercise group details</Text>
        <Button
          title="close"
          onPress={() => props.setIsExerciseGroupDetailModalVisible(false)}
        />
      </View>
    </Modal>
  );
}

export default ExerciseGroupDetailModal;
