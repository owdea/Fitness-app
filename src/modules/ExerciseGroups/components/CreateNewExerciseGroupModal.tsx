import {Button, Modal, Text, View} from 'react-native';
import * as React from 'react';

function CreateNewExerciseGroupModal(props: any) {
  return (
    <Modal
      visible={props.isCreateNewExerciseGroupModalVisible}
      onRequestClose={() =>
        props.setIsCreateNewExerciseGroupModalVisible(false)
      }
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Enter exercise group details</Text>
        <Button
          title="close"
          onPress={() => props.setIsCreateNewExerciseGroupModalVisible(false)}
        />
      </View>
    </Modal>
  );
}

export default CreateNewExerciseGroupModal;
