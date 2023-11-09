import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TrackWorkoutScreen from './src/pages/TrackWorkoutScreen';
import HomeScreen from './src/pages/HomePage';
import ExerciseGroupPage from './src/pages/ExerciseGroupPage';
import ExcersiseListPage from './src/pages/ExerciseListPage';
import CalendarPage from './src/pages/CalendarPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Track workout" component={TrackWorkoutScreen} />
        <Drawer.Screen
          name="Groups of excersises"
          component={ExerciseGroupPage}
        />
        <Drawer.Screen
          name="List of excersises"
          component={ExcersiseListPage}
        />
        <Drawer.Screen name="Calendar" component={CalendarPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
