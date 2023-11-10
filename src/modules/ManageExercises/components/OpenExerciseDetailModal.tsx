import {Button, Modal, Text, View} from 'react-native';
import * as React from 'react';

function OpenExerciseDetailModal(props: any) {
  return (
    <Modal
      visible={props.isOpenExerciseDetailModalVisible}
      onRequestClose={() => props.setIsOpenExerciseDetailModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Detail information about certain exercise</Text>
        <Button
          title="close"
          onPress={() => props.setIsOpenExerciseDetailModalVisible(false)}
        />
      </View>
    </Modal>
  );
}
export default OpenExerciseDetailModal;
