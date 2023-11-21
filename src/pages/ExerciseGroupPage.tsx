import 'react-native-gesture-handler';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExerciseGroupScreen from '../modules/ExerciseGroups/components/ExerciseGroupScreen';
import CreateNewExerciseGroupScreen from '../modules/ExerciseGroups/components/CreateNewExerciseGroupScreen';
import {StackParamList} from '../types';

const Stack = createNativeStackNavigator<StackParamList>();

function ExerciseGroupPage() {
  return (
    <Stack.Navigator initialRouteName="ExerciseGroupScreen">
      <Stack.Screen
        name="ExerciseGroupScreen"
        component={ExerciseGroupScreen}
        options={{title: 'ExerciseGroupScreen'}}
      />
      <Stack.Screen
        name={'CreateNewExerciseGroupScreen'}
        component={CreateNewExerciseGroupScreen}
        options={{title: 'CreateNewExerciseGroupScreen'}}
      />
    </Stack.Navigator>
  );
}

export default ExerciseGroupPage;
