import color from '@theme/color';
import React, { FC, memo } from 'react';
import {
  StatusBar,
  StatusBarProps,
  View,
  ViewStyle
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CustomStatusBarProps {
  statusBarProps?: StatusBarProps;
  containerStyle?: ViewStyle;
  backgroundColor?: string;
  animated?: boolean;
  translucent?: boolean;
  barStyle?: 'default' | 'dark-content' | 'light-content';
  hidden?: boolean;
}
const CustomStatusBar: FC<CustomStatusBarProps> = ({
  containerStyle,
  backgroundColor,
  barStyle,
  animated,
  translucent,
  hidden,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: backgroundColor ?? color.primaryBG,
        },
        containerStyle,
      ]}>
      <StatusBar
        animated={animated}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={translucent}
        hidden={hidden}
        {...props}
      />
    </View>
  );
};
export default memo(CustomStatusBar);

CustomStatusBar.defaultProps = {
  backgroundColor: color.primaryBG,
  barStyle: 'dark-content',
  animated: true,
};
