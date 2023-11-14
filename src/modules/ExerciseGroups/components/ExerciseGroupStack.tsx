import {Button, Text, View} from 'react-native';
import * as React from 'react';
import ExerciseGroupDetailModal from './ExerciseGroupDetailModal';
import {useState} from 'react';

function ExerciseGroupStack({navigation}: any) {
  const [
    isExerciseGroupDetailModalVisible,
    setIsExerciseGroupDetailModalVisible,
  ] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Exercise Group Stack</Text>
      <Button
        title="Create new exercise group"
        onPress={() => navigation.navigate('CreateNewExerciseGroupStack')}
      />
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

export default ExerciseGroupStack;
