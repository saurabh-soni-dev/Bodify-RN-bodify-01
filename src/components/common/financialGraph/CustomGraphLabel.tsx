import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './financialGraph.style';

interface CustomGraphLabelProps {
  label?: string;
}
const CustomGraphLabel: FC<CustomGraphLabelProps> = ({label}) => {
  return (
    <View style={styles.xAxisLabelView}>
      <Text
        allowFontScaling={false}
        numberOfLines={1}
        style={styles.xAxisLabelText}>
        {label}
      </Text>
    </View>
  );
};
export default memo(CustomGraphLabel);
