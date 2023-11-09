import {Button, Modal, Text, View} from 'react-native';
import * as React from 'react';

function CreateNewExerciseModal(props: any) {
  return (
    <Modal
      visible={props.isCreateNewExerciseModalVisible}
      onRequestClose={() => props.setIsCreateNewExerciseModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Create new exercise page</Text>
        <Button
          title="close"
          onPress={() => props.setIsCreateNewExerciseModalVisible(false)}
        />
      </View>
    </Modal>
  );
}

export default CreateNewExerciseModal;
