import React, { FC, memo } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { styles } from './orLine.style';

interface OrLineProps {
  label?: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
const OrLine: FC<OrLineProps> = ({label, labelStyle,containerStyle}) => {
  return (
    <View style={[styles.container,containerStyle]}>
      <View style={styles.lineView} />
      {label && (
        <Text allowFontScaling={false} style={[styles.labelStyle, labelStyle]}>
          {label}
        </Text>
      )}
      <View style={styles.lineView} />
    </View>
  );
};

export default memo(OrLine);
