import {useAuthNavigation} from '@hooks/useAppNavigation';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo, useCallback} from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './header.style';

export interface HeaderProps {
  containerStyle?: ViewStyle;
  showBackIcon?: boolean;
  lable?: string;
  lableStyle?: TextStyle;
  rightButtonText?: string;
  onPressBackIcon?: () => void;
  onPressRightButton?: () => void;
}

const Header: FC<HeaderProps> = ({
  containerStyle,
  showBackIcon,
  lable,
  lableStyle,
  rightButtonText,
  onPressBackIcon,
  onPressRightButton,
}) => {
  const navigation = useAuthNavigation();
  const handleBackNavigation = useCallback(() => {
    if (showBackIcon) {
      onPressBackIcon ? onPressBackIcon() : navigation.goBack();
    }
  }, [navigation, onPressBackIcon, showBackIcon]);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.rightIconRow}>
        <View
          style={[
            styles.titleRow,
            rightButtonText !== '' && styles.isHasRightText,
          ]}>
          {showBackIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleBackNavigation}
              style={styles.backButtonView}>
              <svgIndex.back fill={color.black} />
            </TouchableOpacity>
          )}
          {lable && (
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[styles.labelText, lableStyle]}>
              {lable}
            </Text>
          )}
        </View>
        {rightButtonText && (
          <TouchableOpacity
            onPress={onPressRightButton}
            activeOpacity={0.8}
            style={styles.rightView}>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.rightText}>
              {rightButtonText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default memo(Header);
Header.defaultProps = {
  showBackIcon: false,
  rightButtonText: '',
};
