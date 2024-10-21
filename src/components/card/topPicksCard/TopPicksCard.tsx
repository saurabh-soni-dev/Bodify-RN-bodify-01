import imageIndex from '@imageIndex';
import svgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {
  ImageBackground,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './topPicksCard.style';

interface TopPicksCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  nameStyle?: TextStyle;
  blurViewBg?: ViewStyle;
  priceShow?: boolean;
  backgroundStyleImage?: ViewStyle;
  crossFitTagView?: ViewStyle;
  tagTextStyle?: TextStyle;
}
interface ItemProps {
  id?: number;
  tag?: string;
  tagPackage?: string;
  rating?: number;
  programsMember?: string;
  subscriber?: string;
  offer?: string;
  title?: string;
  duration?: string;
  level?: string;
  name?: string;
  price?: string;
  secondPrice?: string;
}

const TopPicksCard: FC<TopPicksCardProps> = ({
  item,
  index,
  onPress,
  blurViewBg,
  crossFitTagView,
  backgroundStyleImage,
  tagTextStyle,
}) => {
  return (
    <TouchableOpacity key={index} activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        resizeMode="cover"
        source={imageIndex.frame}
        style={[styles.backgroundStyleImage, backgroundStyleImage]}>
        <View style={[styles.tag, crossFitTagView]}>
          <Text allowFontScaling={false} style={[styles.tagText, tagTextStyle]}>
            {item?.tag}
          </Text>
        </View>
        <View style={styles.followerShowView}>
          <View style={styles.priceContainer}>
            <Text allowFontScaling={false} style={styles.priceText}>
              {item?.rating}
            </Text>
            <svgIndex.starPurpal />
          </View>
          <View style={styles.priceContainer}>
            <Text allowFontScaling={false} style={styles.priceText}>
              {item?.subscriber}
            </Text>
            <svgIndex.userPurpal />
          </View>
        </View>
        <View style={[styles.blurView, blurViewBg]}>
          <View style={styles.rowView}>
            <View style={styles.blurContainer}>
              <Text allowFontScaling={false} style={styles.textStyle}>
                {item?.title}
              </Text>
              <Text allowFontScaling={false} style={styles.durationText}>
                {item?.duration}, {item?.level}
              </Text>
              <Text allowFontScaling={false} style={styles.nameText}>
                {item?.name}
              </Text>
            </View>
            {item?.price && (
              <View style={styles.priceImageContainer}>
                <View style={styles.priceIcon}>
                  <svgIndex.shop />
                </View>
                <Text allowFontScaling={false} style={styles.priceText}>
                  {item?.price}$
                </Text>
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(TopPicksCard);
