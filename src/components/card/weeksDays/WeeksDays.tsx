import {WeeksDaysListProps} from '@screens/trainer/programName/ProgramName';
import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './weeksDays.style';

interface WeeksDaysProps {
  item: WeeksDaysListProps;
  index: number;
  onPressDay?: (dayId: number) => void;
}
const WeeksDays: FC<WeeksDaysProps> = ({item, onPressDay}) => {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.weekName}>
        {item?.weekName}
      </Text>
      <View style={styles.dayWrapper}>
        {item?.days?.map(day => (
          <TouchableOpacity
            key={day?.id}
            activeOpacity={0.6}
            style={styles.dayDivider}
            onPress={() => {
              onPressDay?.(day?.id);
            }}>
            <View
              style={[
                styles.dayView,
                day?.isSelected && styles.dayViewSelected,
                day?.isBorder && styles.isBorder,
              ]}>
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                style={[
                  styles.dayText,
                  day?.isSelected && styles.dayTextSelected,
                ]}>
                {day.dayName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default memo(WeeksDays);
