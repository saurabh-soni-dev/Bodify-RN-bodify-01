import SvgIndex from '@svgIndex';
import React, { FC, memo } from 'react';
import { Animated, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './checkbox.style';

interface CheckboxProps {
  containerStyle?: ViewStyle;
  label?: string;
  isChecked?: boolean;
  onPress?: () => void;
  rightContent?: React.ReactNode;
}

const Checkbox: FC<CheckboxProps> = ({
  containerStyle,
  label,
  isChecked,
  onPress,
  rightContent,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {label && (
        <Text
          allowFontScaling={false}
          style={[styles.label, isChecked && styles.checked]}>
          {label}
        </Text>
      )}
      <Animated.View style={styles.checkboxContainer}>
        {isChecked ? <SvgIndex.checkboxFilled /> : <SvgIndex.checkboxEmpty />}
      </Animated.View>
      {rightContent && rightContent}
    </TouchableOpacity>
  );
};

export default memo(Checkbox);
Checkbox.defaultProps = {
  isChecked: false,
};
