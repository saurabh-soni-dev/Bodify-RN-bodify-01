import SvgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './userManagementCard.style';

interface userManagementCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  onPressThreeDot?: () => void;
}
interface ItemProps {
  id: number;
  referralCode?: string;
  referredBy?: string;
  noOfSubs?: string;
  conversionRate?: string;
  revenueGenerated?: string;
  discount?: string;
}
const UserManagementCard: FC<userManagementCardProps> = ({
  item,
  index,
  onPress,
  onPressThreeDot,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.columnStyle}>
        <Text allowFontScaling={false} style={styles.labalText}>
          Username
        </Text>
        <Text allowFontScaling={false} style={[styles.valueText]}>
          {item?.referralCode}
        </Text>
        <Text
          allowFontScaling={false}
          style={[styles.labalText, styles.labelTextExtraStyle]}>
          Completed %
        </Text>
        <Text allowFontScaling={false} style={styles.valueText}>
          {item?.noOfSubs}
        </Text>
      </View>
      <View style={styles.columnStyle}>
        <View style={styles.discountView}>
          <View style={styles.discount}>
            <Text allowFontScaling={false} style={styles.labalText}>
              Date of Subscription
            </Text>
            <Text allowFontScaling={false} style={styles.valueText}>
              {item?.discount}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={onPressThreeDot}>
            <SvgIndex.moreVertical />
          </TouchableOpacity>
        </View>
        <Text
          allowFontScaling={false}
          style={[styles.labalText, styles.labelTextExtraStyle]}>
          Sessions Completed (#)
        </Text>
        <Text allowFontScaling={false} style={styles.valueText}>
          {item?.revenueGenerated}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(UserManagementCard);
