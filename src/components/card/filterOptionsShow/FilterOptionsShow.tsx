import SvgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './filterOptionsShow.style';

interface SliderCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
}
interface ItemProps {
  id: number;
  title: string;
  checked: boolean;
}

const FilterOptionsShow: FC<SliderCardProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={onPress}>
      <Text
        allowFontScaling={false}
        style={[
          styles.cardTextStyle,
          {
            fontWeight: item?.checked ? '600' : '400',
          },
        ]}>
        {item?.title}
      </Text>
      <>
        {item?.checked ? (
          <SvgIndex.checkboxFilled />
        ) : (
          <SvgIndex.checkboxEmpty />
        )}
      </>
    </TouchableOpacity>
  );
};

export default memo(FilterOptionsShow);
