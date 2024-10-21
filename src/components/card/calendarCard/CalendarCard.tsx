import moment from 'moment';
import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './calendarCard.style';

interface CalendarProps {
  item: number;
  index: number;
  selectedDates: string[];
  currentMonth: number;
  currentYear: number;
  onPress: () => void;
}
const CalendarCard: FC<CalendarProps> = ({
  item,
  onPress,
  selectedDates,
  currentMonth,
  currentYear,
}) => {
  const formattedDate = moment([currentYear, currentMonth, item]).format(
    'DD/MM/YYYY',
  );
  const isSelected = selectedDates?.some(
    selectedDate => selectedDate === formattedDate,
  );
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles?.dateCircle, isSelected && styles.selectedDateCircle]}>
        <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
          {item}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(CalendarCard);
