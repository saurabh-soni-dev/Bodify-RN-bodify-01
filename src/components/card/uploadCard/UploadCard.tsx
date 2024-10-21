import SvgIndex from '@svgIndex';
import React, {FC, memo, useEffect, useMemo, useState} from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Video from 'react-native-video';
import {styles} from './uploadCard.style';

interface UploadCardProps {
  lable?: string;
  lableStyle?: TextStyle;
  optionalLable?: string;
  icon?: React.JSX.ElementType;
  uploadText?: string;
  ratioText?: string;
  containerStyle?: ViewStyle;
  uploadContainerStyle?: ViewStyle;
  onPress?: () => void;
  ratioTextStyle?: TextStyle;
  mediaType?: 'video' | 'image';
  uri: string;
  imageStyle?: ImageStyle;
  videoStyle?: ViewStyle;
  uploadButtonText?: string;
  uploadButtonStyle?: ViewStyle;
  uploadButtonTextStyle?: TextStyle;
}
const UploadCard: FC<UploadCardProps> = ({
  containerStyle,
  lable,
  optionalLable,
  onPress,
  uploadContainerStyle,
  uploadText,
  ratioText,
  ratioTextStyle,
  lableStyle,
  mediaType,
  uri,
  imageStyle,
  videoStyle,
  uploadButtonText,
  uploadButtonStyle,
  uploadButtonTextStyle,
  ...props
}) => {
  const [paused, setPaused] = useState<boolean>(true);

  return (
    <View style={[styles.container, containerStyle]}>
      {lable && (
        <Text allowFontScaling={false} style={[styles.lable, lableStyle]}>
          {lable}{' '}
          {optionalLable && (
            <Text allowFontScaling={false} style={styles.optionalLable}>
              {optionalLable}
            </Text>
          )}
        </Text>
      )}
      <View style={[styles.uploadContainer, uploadContainerStyle]}>
        {uri ? (
          <View style={styles.imageView}>
            {mediaType === 'image' ? (
              <Image
                source={{uri: uri}}
                resizeMode="cover"
                key={uri}
                style={[styles.image, imageStyle]}
              />
            ) : mediaType == 'video' ? (
              <>
                <TouchableOpacity
                  onPress={() => setPaused(!paused)}
                  activeOpacity={1}>
                  <Video
                    source={{uri: uri}}
                    style={[styles.video, videoStyle]}
                    muted={true}
                    key={uri}
                    paused={paused}
                    controls={true}
                    resizeMode="cover"
                    onEnd={() => setPaused(!paused)}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <></>
            )}
            {paused && (
              <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.uploadButton, uploadButtonStyle]}
                onPress={onPress}>
                <SvgIndex.publish />
                <Text
                  allowFontScaling={false}
                  style={[styles.uploadVideoText, uploadButtonTextStyle]}>
                  {uploadButtonText}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{alignItems: 'center'}}>
            {props?.icon && <props.icon />}
            {uploadText && (
              <Text allowFontScaling={false} style={styles.uploadText}>
                {uploadText}
              </Text>
            )}
            {ratioText && (
              <Text
                allowFontScaling={false}
                style={[styles.ratioText, ratioTextStyle]}>
                {ratioText}
              </Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default memo(UploadCard);
