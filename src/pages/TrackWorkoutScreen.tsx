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
        title="Track workout"
        onPress={() => setIsRateWorkoutModalVisible(true)}
      />
      <Button
        title="Finish workout"
        onPress={() => setIsTrackWorkoutModalVisible(true)}
      />
      <TrackWorkoutModal
        isModalVisible={isRateWorkoutModalVisible}
        setIsModalVisible={setIsRateWorkoutModalVisible}
      />
      <RateWorkoutModal
        isModalVisible={isTrackWorkoutModalVisible}
        setIsModalVisible={setIsTrackWorkoutModalVisible}
      />
    </View>
  );
}

export default TrackWorkoutScreen;
