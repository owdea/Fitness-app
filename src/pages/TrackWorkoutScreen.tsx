import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {useState} from 'react';
import TrackWorkoutModal from '../modules/TrackWorkout/components/TrackWorkoutModal';
import RateWorkoutModal from '../modules/TrackWorkout/components/RateWorkoutModal';
import OpenExerciseDetailModal from '../modules/ManageExercises/components/OpenExerciseDetailModal';

function TrackWorkoutScreen() {
  const [isRateWorkoutModalVisible, setIsRateWorkoutModalVisible] =
    useState(false);
  const [isTrackWorkoutModalVisible, setIsTrackWorkoutModalVisible] =
    useState(false);
  const [
    isOpenExerciseDetailModalVisible,
    setIsOpenExerciseDetailModalVisible,
  ] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Track Workout page</Text>
      <Text>TODO: vyhledávání dle jména</Text>
      <Text>TODO: výběr ze skupin cviků</Text>
      {/*Exercise detail section*/}
      <Button
        title="Open exercise detail"
        onPress={() => setIsOpenExerciseDetailModalVisible(true)}
      />
      <OpenExerciseDetailModal
        isOpenExerciseDetailModalVisible={isOpenExerciseDetailModalVisible}
        setIsOpenExerciseDetailModalVisible={
          setIsOpenExerciseDetailModalVisible
        }
      />
      {/*Add new exercise section*/}
      <Button
        title="Add new exercise"
        onPress={() => setIsTrackWorkoutModalVisible(true)}
      />
      <TrackWorkoutModal
        isTrackWorkoutModalVisible={isTrackWorkoutModalVisible}
        setIsTrackWorkoutModalVisible={setIsTrackWorkoutModalVisible}
      />
      {/*Finish workout section*/}
      <Button
        title="Finish workout"
        onPress={() => setIsRateWorkoutModalVisible(true)}
      />
      <RateWorkoutModal
        isRateWorkoutModalVisible={isRateWorkoutModalVisible}
        setIsRateWorkoutModalVisible={setIsRateWorkoutModalVisible}
      />
    </View>
  );
}

export default TrackWorkoutScreen;
