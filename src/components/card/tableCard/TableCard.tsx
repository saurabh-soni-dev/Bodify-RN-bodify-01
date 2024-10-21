import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './tableCard.style';

interface TableCardProps {
  label: string;
  displayNumber: string;
  displayType: string;
  onPress: () => void;
}

const TableCard: FC<TableCardProps> = ({
  label,
  displayNumber,
  displayType,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}
    >
      <Text allowFontScaling={false} style={styles.textTableLabel}>
        {label}
      </Text>
      <View style={styles.cardSetsViewRowStyle}>
        <Text allowFontScaling={false} style={styles.tableNumberStyle}>
          {displayNumber}
        </Text>
        <View style={styles.lineStyle} />
        <Text allowFontScaling={false} style={styles.tableTypeTextStyle}>
          {displayType?.slice(0, 3)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(TableCard);
