import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {styles} from './history.style';
import {CustomStatusbar} from '@components';

const History: FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusbar />
      <View style={styles.mainContainer}>
        <Text allowFontScaling={false}>History screen</Text>
      </View>
    </View>
  );
};

export default History;
