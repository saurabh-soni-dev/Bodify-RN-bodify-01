import React, {FC, memo} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './clipCard.style';

interface ClipCardProps {
  title: string;
  onPress?: () => void;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  isDisabled?: boolean;
  icon?: React.JSX.ElementType
}

const ClipCard: FC<ClipCardProps> = ({
  onPress,
  titleStyle,
  title,
  containerStyle,
  isDisabled,
  ...props
}) => {
  const Icon = props.icon;
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text allowFontScaling={false} style={[styles.priceText, titleStyle]}>
        {title}
      </Text>
      {Icon && <Icon />}
    </TouchableOpacity>
  );
};

export default memo(ClipCard);
