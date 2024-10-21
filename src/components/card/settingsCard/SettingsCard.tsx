import { useAuthNavigation } from '@hooks/useAppNavigation';
import svgIndex from '@svgIndex';
import React, { FC, memo, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './settingsCard.style';

 interface SettingsCardProps {
  item: SectionProps;
  index?: number;
  onPress?: () => void;
}
export interface SectionProps {
  id: number;
  sectionTitle?: string;
  settings?: SettingProps[];
}
export interface SettingProps {
  id: number;
  title?: string;
  icon?: React.JSX.ElementType;
  navigation?: string;
  rightArrow?: boolean;
}

const SettingsCard: FC<SettingsCardProps> = ({item, index, onPress}) => {
  const navigation = useAuthNavigation();
  const handlePress = useCallback(
    (itemId: number, screenName?: string) => {
      if ([6, 7]?.includes(itemId)) {
        onPress?.();
      } else {
        if (screenName) {
          navigation.navigate(screenName);
        }
      }
    },
    [onPress, navigation],
  );

  return (
    <View style={styles.container} key={item?.id}>
      {item?.sectionTitle && (
        <Text allowFontScaling={false} style={styles.sectionText}>
          {item?.sectionTitle}
        </Text>
      )}
      <View style={[styles.settingsContainer]}>
        {item?.settings?.map((setting: SettingProps, i: number) => (
          <View style={styles.settingCard} key={setting?.id}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handlePress(item?.id, setting?.navigation)}
              style={[styles.settingButton, i !== 0 && styles.separatorLine]}>
              <View style={styles.settingDetails}>
                <View style={styles.settingTitleContainer}>
                  {setting?.icon && <setting.icon />}
                  <Text allowFontScaling={false} style={styles.settingTitle}>
                    {setting?.title}
                  </Text>
                </View>
                {setting?.rightArrow && <svgIndex.arrowRightIos />}
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default memo(SettingsCard);
