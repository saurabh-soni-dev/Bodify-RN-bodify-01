import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import React, {FC, memo, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import styles from './sliderCard.style';

interface SliderCardProps {
  item: ItemProps;
  index: number;
  onUserProfileClick?: () => void;
  nameStyle?: TextStyle;
}
interface ItemProps {}

const SliderCard: FC<SliderCardProps> = ({item, onUserProfileClick}) => {
  const [star, setStar] = useState<number | undefined>(undefined);
  return (
    <TouchableOpacity onPress={onUserProfileClick}>
      <ImageBackground source={imageIndex.sliderCard} style={styles.container}>
        <Image
          resizeMode="contain"
          source={imageIndex.greenCard}
          style={styles.innerContainer}
        />
        <View style={styles.tag}>
          <Text allowFontScaling={false} style={styles.crossFitText}>
            CROSS-Fit
          </Text>
          <Text allowFontScaling={false} style={styles.backText}>
            Back & Biceps
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <Text allowFontScaling={false} style={styles.nameText}>
            Alex Margot
          </Text>
          <StarRating
            maxStars={5}
            starSize={15}
            starStyle={styles.star}
            rating={5}
            fullStar={imageIndex.star}
            selectedStar={(rating: number) => setStar(rating)}
          />
        </View>
        <View style={styles.postisionStyle}>
          <View style={styles.infoContainer}>
            <View>
              <Text allowFontScaling={false} style={styles.infoText}>
                12 Weeks
              </Text>
              <Text allowFontScaling={false} style={styles.textView}>
                Full body, Abs & Core, Booty, Arms, Resistance
              </Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceIcon}>
              <SvgIndex.shop />
            </View>
            <Text allowFontScaling={false} style={styles.priceText}>
              12.99$
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(SliderCard);
