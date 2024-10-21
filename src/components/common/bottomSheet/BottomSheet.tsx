import React, {FC, memo} from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './bottomSheet.style';

interface BottomSheetProps {
  item: ItemProps;
  index?: number;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  rowViewStyle?: ViewStyle;
  titleStyle?: TextStyle;
}
interface ItemProps {
  id?: number;
  title?: string;
  icon?: React.JSX.ElementType;
}

const BottomSheet: FC<BottomSheetProps> = ({
  item,
  index,
  onPress,
  containerStyle,
  rowViewStyle,
  titleStyle,
}) => {
  const Icon = item?.icon as React.ElementType;
  const isNotZero = index !== 0;
  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View style={[styles.rowView, rowViewStyle, isNotZero && styles.border]}>
        {item?.icon && (
          <View style={styles.iconView}>
            <Icon />
          </View>
        )}
        <Text allowFontScaling={false} style={[styles.title, titleStyle]}>
          {item?.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(BottomSheet);
