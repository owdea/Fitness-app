import 'react-native-gesture-handler';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExerciseGroupStack from '../modules/ExerciseGroups/components/ExerciseGroupStack';
import CreateNewExerciseGroupStack from '../modules/ExerciseGroups/components/CreateNewExerciseGroupStack';

const Stack = createNativeStackNavigator();
function ExerciseGroupPage() {
  return (
    <Stack.Navigator initialRouteName="ExerciseGroupStack">
      <Stack.Screen
        name="ExerciseGroupStack"
        component={ExerciseGroupStack}
        options={{title: 'ExerciseGroupStack'}}
      />
      <Stack.Screen
        name={'CreateNewExerciseGroupStack'}
        component={CreateNewExerciseGroupStack}
        options={{title: 'CreateNewExerciseGroupStack'}}
      />
    </Stack.Navigator>
  );
}

export default ExerciseGroupPage;
