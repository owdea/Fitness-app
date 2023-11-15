import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TrackWorkoutScreen from './src/pages/TrackWorkoutScreen';
import HomeScreen from './src/pages/HomePage';
import ExerciseGroupPage from './src/pages/ExerciseGroupPage';
import ExerciseListPage from './src/pages/ExerciseListPage';
import CalendarPage from './src/pages/CalendarPage';
import {Routes} from './src/router/routes';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name={Routes.Home} component={HomeScreen} />
        <Drawer.Screen
          name={Routes.Track_workout}
          component={TrackWorkoutScreen}
        />
        <Drawer.Screen
          name={Routes.Groups_of_exercise}
          component={ExerciseGroupPage}
        />
        <Drawer.Screen
          name={Routes.List_of_exercises}
          component={ExerciseListPage}
        />
        <Drawer.Screen name={Routes.Calendar} component={CalendarPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
