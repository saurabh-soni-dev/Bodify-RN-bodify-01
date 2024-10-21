import SvgIndex from '@svgIndex';
import React, {FC, useEffect, useState} from 'react';
import {
  ImageBackground,
  ImageProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './myProgramHorizontalCard.style';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import imageIndex from '@imageIndex';
import {Log} from '@utility/log';

interface MyProgramHorizontalCardProps {
  item: ProfileProgramsListItemProps;
  index: number;
  userName: string;
  onPress?: () => void;
}
export interface ProfileProgramsListItemProps {
  img?: string;
  level?: string;
  name?: string;
  numberOfWeeks?: number;
  price?: number;
  rating?: number;
  subscribers?: number;
  type?: string;
}
const MyProgramHorizontalCard: FC<MyProgramHorizontalCardProps> = ({
  item,
  onPress,
  index,
  userName,
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  let imageSource = backgroundImage
    ? {uri: backgroundImage}
    : imageIndex.programsBG;

  useEffect(() => {
    if (item?.img) {
      getImageApiCall(item?.img);
    }
  }, [item?.img]);

  //** Start background image api call */
  const getImageApiCall = async (image?: string) => {
    try {
      const {request} = await axiosInstance.get(
        `${constant.imageURL}${image}`,
        {
          responseType: 'arraybuffer',
          headers: {
            'Custom-Header': 'value',
          },
        },
      );
      if (request) {
        setBackgroundImage(`data:image/png;base64,${request?.['_response']}`);
      }
    } catch (error) {
      Log('error profile program list data', error);
    }
  };
  //** End background image api call */
  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.8}
      style={styles.Container}
      onPress={onPress}>
      <ImageBackground
        source={imageSource}
        resizeMode="cover"
        style={styles.bgImage}>
        <View style={styles.tagView}>
          <Text style={styles.tagText} allowFontScaling={false}>
            {item?.type}
          </Text>
        </View>
        <View style={styles.detailsView}>
          <View style={styles.subcriberView}>
            <View style={styles.ratingCard}>
              <Text style={styles.ratingText} allowFontScaling={false}>
                {typeof item?.rating === 'string' && item?.rating === 'N/A'
                  ? 0
                  : item?.rating}
              </Text>
              <View style={styles.ratingIcon}>
                <SvgIndex.starPurpal />
              </View>
            </View>
            <View style={styles.subscriberCard}>
              <Text style={styles.ratingText} allowFontScaling={false}>
                {item?.subscribers}
              </Text>
              <View style={styles.ratingIcon}>
                <SvgIndex.userPurpal />
              </View>
            </View>
          </View>
          <View style={styles.blurCard}>
            <View style={styles.infoView}>
              <Text style={styles.titleText} allowFontScaling={false}>
                {item?.name}
              </Text>
              <Text style={styles.durationText} allowFontScaling={false}>
                {item?.numberOfWeeks} Weeks, {item?.level}
              </Text>
              <Text style={styles.nameText} allowFontScaling={false}>
                {userName}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.addToCardButton}>
              <View style={styles.cartIcon}>
                <SvgIndex.dollor />
              </View>
              <Text style={styles.priceText} allowFontScaling={false}>
                {item?.price}$
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MyProgramHorizontalCard;
