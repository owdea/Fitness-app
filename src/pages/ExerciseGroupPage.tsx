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
      <Text>TODO: rozklikávací rozklikávací bloky</Text>
      {/*Create new group section*/}
      <Button
        title="Create new exercise group"
        onPress={() => setIsCreateNewExerciseGroupModalVisible(true)}
      />
      <CreateNewExerciseGroupModal
        isCreateNewExerciseGroupModalVisible={
          isCreateNewExerciseGroupModalVisible
        }
        setIsCreateNewExerciseGroupModalVisible={
          setIsCreateNewExerciseGroupModalVisible
        }
      />
      {/*Open detail about exercise group section*/}
      <Button
        title="Open exercise group detail"
        onPress={() => setIsExerciseGroupDetailModalVisible(true)}
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
