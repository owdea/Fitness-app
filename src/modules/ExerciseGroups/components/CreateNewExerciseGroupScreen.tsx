import {Button, Text, View} from 'react-native';
import * as React from 'react';
import ExerciseDetailModal from '../../ManageExercises/components/ExerciseDetailModal';
import {useState} from 'react';
import CreateNewExerciseModal from '../../ManageExercises/components/CreateNewExerciseModal';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../../types';
type CreateNewExerciseGroupScreenProps = NativeStackScreenProps<
  StackParamList,
  'CreateNewExerciseGroupScreen'
>;
function CreateNewExerciseGroupScreen(
  props: CreateNewExerciseGroupScreenProps,
) {
  const [isExerciseDetailModalVisible, setIsExerciseDetailModalVisible] =
    useState(false);
  const [isCreateNewExerciseModalVisible, setIsCreateNewExerciseModalVisible] =
    useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Create New Exercise Group Stack</Text>
      <Button
        title="Go back to Exercise group page"
        onPress={() => props.navigation.navigate('ExerciseGroupScreen')}
      />
      {/*Open exercise detail modal section*/}
      <Button
        title="Open exercise detail"
        onPress={() => setIsExerciseDetailModalVisible(true)}
      />
      <ExerciseDetailModal
        isExerciseDetailModalVisible={isExerciseDetailModalVisible}
        setIsExerciseDetailModalVisible={setIsExerciseDetailModalVisible}
      />
      {/*Create new exercise modal section*/}
      <Button
        title="Create new exercise"
        onPress={() => setIsCreateNewExerciseModalVisible(true)}
      />
      <CreateNewExerciseModal
        isCreateNewExerciseModalVisible={isCreateNewExerciseModalVisible}
        setIsCreateNewExerciseModalVisible={setIsCreateNewExerciseModalVisible}
      />
    </View>
  );
}

export default CreateNewExerciseGroupScreen;
