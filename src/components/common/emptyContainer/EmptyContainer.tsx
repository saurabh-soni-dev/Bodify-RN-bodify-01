import React, { FC, memo } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { styles } from './emptyContainer.style';

export interface EmptyContainerProps {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  message?: String;
}
const EmptyContainer: FC<EmptyContainerProps> = ({
  containerStyle,
  textStyle,
  message,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]} allowFontScaling={false}>
        {message ?? 'No Data Available!'}
      </Text>
    </View>
  );
};

export default memo(EmptyContainer);
