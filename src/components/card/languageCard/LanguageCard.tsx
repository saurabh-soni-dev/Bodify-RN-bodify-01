import React, {FC, memo, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './language.style';
interface LanguageCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  value?: string;
}
interface ItemProps {
  title?: string;
  country?: string;
  selected?: boolean;
}
const LanguageCard: FC<LanguageCardProps> = ({item, onPress, value}) => {
  const isSelected = value == item?.title;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, isSelected && styles.selectedView]}>
      <Text
        allowFontScaling={false}
        numberOfLines={1}
        style={[styles.title, isSelected && styles.selectedText]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(LanguageCard);
