import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SvgIndex from '@svgIndex';
import styles from './filterCard.style';

interface FilterCardProps {
  label: string;
  value: string;
  onPress: () => void;
}

const FilterCard: FC<FilterCardProps> = ({label, value, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardView}>
      <View style={styles.rowViewStyle}>
        <Text allowFontScaling={false} style={styles.labelStyle}>
          {label}
        </Text>
        <SvgIndex.arrowRightBlack />
      </View>
      <Text allowFontScaling={false} style={styles.valueTextStyle}>
        {`${value}${' '}`}
      </Text>
      <View style={styles.outLine} />
    </TouchableOpacity>
  );
};

export default memo(FilterCard);
