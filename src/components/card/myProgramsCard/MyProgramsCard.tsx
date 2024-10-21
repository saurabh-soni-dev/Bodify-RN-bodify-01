import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import {Log} from '@utility/log';
import React, {FC, memo, useEffect, useMemo, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './myProgramsCard.style';
interface MyProgramsCardProps {
  item: ProgramsItemProps;
  index: number;
  showCheckBox?: boolean;
  isSelected?: boolean;
  showStatus?: boolean;
  anotherStatusDeActive?: boolean;
  onPress?: () => void;
}

export interface ProgramsItemProps {
  date?: string;
  img?: string;
  level?: string;
  name?: string;
  numberOfWeeks: number;
  price: number;
  programId?: string;
  retention?: number;
  rating?: number;
  subscribers?: number;
  status?: string;
  type?: string;
  progress?: string;
  isChecked?: boolean;
}

const MyProgramsCard: FC<MyProgramsCardProps> = ({
  item,
  showCheckBox,
  isSelected,
  showStatus,
  anotherStatusDeActive,
  onPress,
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
      Log('error', error);
    }
  };
  //** End background image api call */

  //** Manage colors according to status */
  type StatusColors = {
    color: string;
    dotColor: string;
    textColor: string;
  };
  const getStatusColors = (status?: string): StatusColors => {
    switch (status) {
      case 'active':
        return {
          color: color.forestGreen,
          dotColor: color.viridianGreen,
          textColor: color.viridianGreen,
        };
      case 'Deactivated':
        return {
          color: color.lightRed,
          dotColor: color.warning,
          textColor: color.warning,
        };
      case 'draft':
        return {
          color: color.secondaryBG,
          dotColor: color.secondaryText,
          textColor: color.secondaryText,
        };
      case 'Deleted':
        return {
          color: color.lightRed,
          dotColor: color.warning,
          textColor: color.warning,
        };
      default:
        return {
          color: color.buttonBG,
          dotColor: color.black,
          textColor: color.primaryText,
        };
    }
  };
  const statusColors: StatusColors = useMemo(
    () => getStatusColors(item?.status),
    [item?.status],
  );
  const statusColor: string = statusColors.color;
  const statusDotColor: string = statusColors.dotColor;
  const statusTextColor: string = statusColors.textColor;

  return (
    <TouchableOpacity
      disabled={anotherStatusDeActive}
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, isSelected && styles.highlightBorder]}>
      <ImageBackground
        source={imageSource}
        style={styles.imageBg}
        resizeMode="cover">
        <ImageBackground source={imageIndex.shodowCard} style={styles.shadowBg}>
          <View style={styles.tagsContainer}>
            {item?.status === 'Deactivated' && !anotherStatusDeActive ? (
              <LinearGradient
                colors={color.packageBG}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.tagLinearColor}>
                <Text allowFontScaling={false} style={styles.tagPackageText}>
                  {item?.type}
                </Text>
                <SvgIndex.packageIcon />
              </LinearGradient>
            ) : (
              <View style={styles.tag}>
                <Text
                  textBreakStrategy="highQuality"
                  allowFontScaling={false}
                  style={styles.tagText}>
                  {item?.status === 'Deactivated' && anotherStatusDeActive
                    ? 'Crossfit'
                    : item?.type}
                </Text>
              </View>
            )}
            {showStatus && (
              <View
                style={[
                  styles.statusContainer,
                  {
                    backgroundColor: statusColor,
                  },
                ]}>
                <View
                  style={[
                    styles.statusDot,
                    {
                      backgroundColor: statusDotColor,
                    },
                  ]}
                />
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.statusText,
                    {
                      color: statusTextColor,
                    },
                  ]}>
                  {item?.status}
                </Text>
              </View>
            )}
            {showCheckBox && (
              <View style={styles.checkIcon}>
                {item?.isChecked ? (
                  <SvgIndex.selectCheck />
                ) : (
                  <SvgIndex.unCheckWhite fill={color.secondaryBG} />
                )}
              </View>
            )}
          </View>
          <Text allowFontScaling={false} style={styles.title} numberOfLines={1}>
            {item?.name}
          </Text>
          <View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.infoRow}>
                  <SvgIndex.user />
                  <Text allowFontScaling={false} style={styles.infoText}>
                    {item?.subscribers}k
                  </Text>
                  <SvgIndex.network />
                  <Text
                    allowFontScaling={false}
                    textBreakStrategy="highQuality"
                    style={[styles.infoText, styles.textView]}>
                    {item?.level}
                  </Text>
                  <SvgIndex.star />
                  <Text allowFontScaling={false} style={styles.infoText}>
                    {typeof item?.rating === 'string' && item?.rating === 'N/A'
                      ? 0
                      : item?.rating}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <SvgIndex.time />
                  <Text allowFontScaling={false} style={styles.infoText}>
                    {item?.numberOfWeeks} week
                  </Text>
                  <SvgIndex.trading />
                  <Text allowFontScaling={false} style={styles.infoText}>
                    {item?.retention}%
                  </Text>
                </View>
              </View>
              <View style={styles.priceContainer}>
                <View style={styles.priceIcon}>
                  <SvgIndex.dollor />
                </View>
                <Text allowFontScaling={false} style={styles.priceText}>
                  {item?.price}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(MyProgramsCard);
MyProgramsCard.defaultProps = {
  anotherStatusDeActive: false,
};
