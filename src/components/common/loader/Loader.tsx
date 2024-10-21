import React, {FC, memo} from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {styles} from './loader.style';
import color from '@theme/color';

interface LoaderProps {
  containerStyle?: ViewStyle;
  size?: number | 'small' | 'large';
  color?: string;
  animating?: boolean;
}
const Loader: FC<LoaderProps> = ({containerStyle, size, color, animating}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator color={color} size={size} animating={animating} />
    </View>
  );
};
Loader.defaultProps = {
  size: 'large',
  color: color.primaryText,
};
export default memo(Loader);

