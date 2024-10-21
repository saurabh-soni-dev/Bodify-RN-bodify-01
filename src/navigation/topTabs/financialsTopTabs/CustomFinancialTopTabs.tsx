import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import color from '@theme/color';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { topTabs } from './financialTopTabs.const';
import { styles } from './financialsTopTabs.style';

interface TabItemProps {
  label?: string;
  isFocused?: boolean;
  onPress?: () => void;
}

const TabItem: FC<TabItemProps> = ({label, onPress, isFocused}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.tabItemContainer}>
    <View
      style={[
        styles.tabItemWrapper,
        {borderBottomColor: isFocused ? color.primary : color.primaryBG},
      ]}>
      <View style={styles.tabItemView}>
        <Text
          allowFontScaling={false}
          style={styles.tabItemText}
          numberOfLines={1}>
          {label}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const CustomFinancialTopTabs: FC<MaterialTopTabBarProps> = ({
  state,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {topTabs?.map((route, index) => {
        const isFocused = state?.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route?.name);
          }
        };
        return (
          <TabItem
            key={route?.id}
            label={route?.title}
            onPress={onPress}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
};

export default CustomFinancialTopTabs;
