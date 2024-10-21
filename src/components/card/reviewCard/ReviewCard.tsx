import svgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {Image, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './reviewCard.style';

interface ReviewsCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
}
interface ItemProps {
  id?: number;
  profileImage?: ImageProps;
  time?: string;
  comment?: string;
  rate?: number;
  userName: string;
  createdAt: string;
}
const ReviewCard: FC<ReviewsCardProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      key={item?.id}
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.imageView}>
        <Image
          source={item?.profileImage}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.reviewView}>
        <Text style={styles.timeText} allowFontScaling={false}>
          {item?.userName} {item?.createdAt}
        </Text>
        <Text style={styles.reviewText} allowFontScaling={false}>
          {item?.comment}
        </Text>
      </View>
      <View style={styles.ratingView}>
        <Text style={styles.ratingText} allowFontScaling={false}>
          {item?.rate}
        </Text>
        <svgIndex.yellowStar />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ReviewCard);
