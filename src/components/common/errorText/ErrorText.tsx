import React, {FC, memo} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import styles from './errorText.style';

interface ErrorTextProps {
  error?: string;
  errorContainerStyle?: ViewStyle;
  errorTextStyle?: TextStyle;
}
const ErrorText: FC<ErrorTextProps> = ({
  error,
  errorContainerStyle,
  errorTextStyle,
}) => {
  if (!error) return null;
  return (
    <View style={[styles.errorViewStyle, errorContainerStyle]}>
      <Text
        allowFontScaling={false}
        style={[styles.errorStyle, errorTextStyle]}>
        {error}
      </Text>
    </View>
  );
};

export default memo(ErrorText);
