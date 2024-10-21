import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './referralCard.style';

interface ReferralCardProps {
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
const ReferralCard: FC<ReferralCardProps> = ({
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
          Referral code
        </Text>
        <Text
          allowFontScaling={false}
          style={[styles.valueText, {color: color.primary}]}>
          {item?.referralCode}
        </Text>
        <Text
          allowFontScaling={false}
          style={[styles.labalText, styles.lableTextExtra]}>
          No. of Subscribers
        </Text>
        <Text allowFontScaling={false} style={styles.valueText}>
          {item?.noOfSubs}
        </Text>
      </View>
      <View style={styles.columnStyle}>
        <Text allowFontScaling={false} style={styles.labalText}>
          Referral by
        </Text>
        <Text allowFontScaling={false} style={styles.valueText}>
          {item?.referredBy}
        </Text>
        <Text
          allowFontScaling={false}
          style={[styles.labalText, styles.lableTextExtra]}>
          Conversion Rate
        </Text>
        <Text allowFontScaling={false} style={styles.valueText}>
          {item?.conversionRate}
        </Text>
      </View>
      <View style={styles.columnStyle}>
        <View style={styles.discountView}>
          <View style={styles.discount}>
            <Text allowFontScaling={false} style={styles.labalText}>
              Discount
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
          style={[styles.labalText, styles.lableTextExtra]}>
          Revenue Generated
        </Text>
        <Text allowFontScaling={false} style={styles.valueText}>
          {item?.revenueGenerated}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ReferralCard);
