import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import CreateNewExcersise from '../modules/ManageExcersises/components/CreateNewExcersise';
import {useState} from 'react';

function ExerciseListPage() {
  const [isCreateNewExerciseModalVisible, setIsCreateNewExerciseModalVisible] =
    useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Excersise List Page</Text>
      <Button
        title="Create new workout"
        onPress={() => setIsCreateNewExerciseModalVisible(true)}
      />
      <CreateNewExcersise
        isCreateNewExerciseModalVisible={isCreateNewExerciseModalVisible}
        setIsCreateNewExerciseModalVisible={setIsCreateNewExerciseModalVisible}
      />
    </View>
  );
}

export default ExerciseListPage;
