import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {useState} from 'react';
import TrackWorkoutModal from '../modules/TrackWorkout/components/TrackWorkoutModal';
import RateWorkoutModal from '../modules/TrackWorkout/components/RateWorkoutModal';

function TrackWorkoutScreen() {
  const [isRateWorkoutModalVisible, setIsRateWorkoutModalVisible] =
    useState(false);
  const [isTrackWorkoutModalVisible, setIsTrackWorkoutModalVisible] =
    useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Track Workout page</Text>
      <Button
        title="Add new exercise"
        onPress={() => setIsTrackWorkoutModalVisible(true)}
      />
      <Button
        title="Finish workout"
        onPress={() => setIsRateWorkoutModalVisible(true)}
      />
      <TrackWorkoutModal
        isTrackWorkoutModalVisible={isTrackWorkoutModalVisible}
        setIsTrackWorkoutModalVisible={setIsTrackWorkoutModalVisible}
      />
      <RateWorkoutModal
        isRateWorkoutModalVisible={isRateWorkoutModalVisible}
        setIsRateWorkoutModalVisible={setIsRateWorkoutModalVisible}
      />
    </View>
  );
}

export default TrackWorkoutScreen;
