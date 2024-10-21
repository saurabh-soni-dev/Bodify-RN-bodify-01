import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo} from 'react';
import {
  ImageBackground,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './similarPackages.style';

interface SimilarPackagesProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  nameStyle?: TextStyle
  blurViewBg?: ViewStyle;
  backgroundStyleImage?: ViewStyle;
  crossFitTagView?: ViewStyle;
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
const SimilarPackages: FC<SimilarPackagesProps> = ({
  item,
  onPress,
  blurViewBg,
  crossFitTagView,
  backgroundStyleImage,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        resizeMode="cover"
        source={imageIndex.frame}
        style={[styles.backgroundStyleImage, backgroundStyleImage]}>
        {item?.tagPackage && (
          <LinearGradient
            colors={color.packageBG}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.tagLinearColor}>
            <Text allowFontScaling={false} style={styles.tagTextLinear}>
              {item?.tagPackage}
            </Text>
            <SvgIndex.packageIcon />
          </LinearGradient>
        )}
        <View style={[styles.tag, crossFitTagView]}>
          <Text allowFontScaling={false} style={styles.tagText}>
            {item?.tag}
          </Text>
        </View>
        <View style={styles.followerShowView}>
          <View style={styles.priceContainer}>
            <Text allowFontScaling={false} style={styles.priceText}>
              {item?.rating}
            </Text>
            <SvgIndex.starPurpal />
          </View>
          <View style={styles.priceContainer}>
            <Text allowFontScaling={false} style={styles.priceText}>
              {item?.subscriber}
            </Text>
            <SvgIndex.userPurpal />
          </View>
          {item?.programsMember && (
            <View style={styles.priceContainer}>
              <Text allowFontScaling={false} style={styles.priceText}>
                {item?.programsMember}
              </Text>
            </View>
          )}
          {item?.offer && (
            <View style={styles.offerContainer}>
              <Text allowFontScaling={false} style={styles.offerText}>
                {item?.offer}
              </Text>
              <SvgIndex.userPurpal />
            </View>
          )}
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
              <View style={styles.priceViewStyle}>
                <Text
                  allowFontScaling={false}
                  style={styles.priceCancelTextStyle}>
                  20.99$
                </Text>
                <View style={styles.priceImageContainer}>
                  <Text allowFontScaling={false} style={styles.priceCancelText}>
                    {item?.price}$
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(SimilarPackages);
