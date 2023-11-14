import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import CreateNewExerciseModal from '../modules/ManageExercises/components/CreateNewExerciseModal';
import ExerciseDetailModal from '../modules/ManageExercises/components/ExerciseDetailModal';
import {useState} from 'react';

function ExerciseListPage() {
  const [isCreateNewExerciseModalVisible, setIsCreateNewExerciseModalVisible] =
    useState(false);
  const [isExerciseDetailModalVisible, setIsExerciseDetailModalVisible] =
    useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Exercise List Page</Text>
      <Button
        title="Create new exercise"
        onPress={() => setIsCreateNewExerciseModalVisible(true)}
      />
      <Button
        title="Open exercise detail"
        onPress={() => setIsExerciseDetailModalVisible(true)}
      />
      <CreateNewExerciseModal
        isCreateNewExerciseModalVisible={isCreateNewExerciseModalVisible}
        setIsCreateNewExerciseModalVisible={setIsCreateNewExerciseModalVisible}
      />
      <ExerciseDetailModal
        isExerciseDetailModalVisible={isExerciseDetailModalVisible}
        setIsExerciseDetailModalVisible={setIsExerciseDetailModalVisible}
      />
    </View>
  );
}

export default ExerciseListPage;
