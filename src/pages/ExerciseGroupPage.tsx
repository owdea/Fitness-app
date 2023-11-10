import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {useState} from 'react';
import CreateNewExerciseGroupModal from '../modules/ExerciseGroups/components/CreateNewExerciseGroupModal';
import ExerciseGroupDetailModal from '../modules/ExerciseGroups/components/ExerciseGroupDetailModal';

function ExerciseGroupPage() {
  const [
    isCreateNewExerciseGroupModalVisible,
    setIsCreateNewExerciseGroupModalVisible,
  ] = useState(false);
  const [
    isExerciseGroupDetailModalVisible,
    setIsExerciseGroupDetailModalVisible,
  ] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Exercise Group Page</Text>
      <Button
        title="Create new exercise group"
        onPress={() => setIsCreateNewExerciseGroupModalVisible(true)}
      />
      <Button
        title="Open exercise group detail"
        onPress={() => setIsExerciseGroupDetailModalVisible(true)}
      />
      <CreateNewExerciseGroupModal
        isCreateNewExerciseGroupModalVisible={
          isCreateNewExerciseGroupModalVisible
        }
        setIsCreateNewExerciseGroupModalVisible={
          setIsCreateNewExerciseGroupModalVisible
        }
      />
      <ExerciseGroupDetailModal
        isExerciseGroupDetailModalVisible={isExerciseGroupDetailModalVisible}
        setIsExerciseGroupDetailModalVisible={
          setIsExerciseGroupDetailModalVisible
        }
      />
    </View>
  );
}

export default ExerciseGroupPage;
