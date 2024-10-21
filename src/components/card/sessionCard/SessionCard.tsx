import SvgIndex from '@svgIndex';
import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './sessionCard.style';

interface SessionCardProps {
  item: SessionItemProps;
  index: number;
  drag?: () => void;
  isActive?: boolean;
  onPressSession?: () => void;
}
export interface SessionItemProps {
  sessionName: string;
}
const SessionCard: FC<SessionCardProps> = ({
  item,
  index,
  drag,
  isActive,
  onPressSession,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.sessionCard}
        key={index}
        onPress={onPressSession}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={styles.sessionTitle}>
          {item?.sessionName}
        </Text>
        <TouchableOpacity
          style={styles.hamburgBtn}
          activeOpacity={0.6}
          onLongPress={drag}>
          <SvgIndex.hamburg />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default memo(SessionCard);
