import color from '@theme/color';
import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './weekCard.style';

interface WeekCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  selectIndex?: number | boolean;
  selectBorder?: boolean;
}
interface ItemProps {
  id?: number;
  title?: number;
}
const WeekCard: FC<WeekCardProps> = ({
  item,
  index,
  onPress,
  selectIndex,
  selectBorder,
}) => {
  const isSelected = index === selectIndex;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isSelected ? color.primary : color.secondaryBG,
            borderColor:
              isSelected || selectBorder ? color.primary : color.lightgray,
          },
        ]}>
        <Text
          allowFontScaling={false}
          style={[
            styles.titleText,
            { color: isSelected ? color.secondaryBG : color.primaryText },
          ]}>
          {item?.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(WeekCard);
