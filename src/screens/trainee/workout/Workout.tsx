import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {styles} from './workout.style';
import {CustomStatusbar} from '@components';

const Workout: FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusbar />
      <View style={styles.mainContainer}>
        <Text allowFontScaling={false}>Workout screen</Text>
      </View>
    </View>
  );
};

export default Workout;
