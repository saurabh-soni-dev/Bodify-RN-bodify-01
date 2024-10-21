import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './programsCard.style';
import Video from 'react-native-video';
import constant from '@config/constant';
import {useAppSelector} from '@hooks/useRedux';

interface ProgramsCardProps {
  item: ItemProps;
  index: number;
  isSelected?: boolean;
  rightIcon?: React.JSX.ElementType;
  showCheckBox?: boolean;
  onPress?: () => void;
  onPressRightIcon?: () => void;
  onPressCheckBox?: () => void;
  isVideo?: boolean;
}
interface ItemProps {
  exercisesId?: string;
  videoId?: string;
  title?: string;
  ownerType?: string;
  mainMuscle?: string;
  secondaryMuscle?: string;
  tags?: string;
  equipment?: string;
  defaultParametersSets?: string;
  defaultParametersReps?: string;
  trainerInstructions?: string;
  checked?: boolean;
}

const ProgramsCard: FC<ProgramsCardProps> = ({
  item,
  index,
  onPress,
  onPressRightIcon,
  onPressCheckBox,
  showCheckBox,
  isSelected,
  isVideo,
  ...props
}) => {
  const {token} = useAppSelector(state => state.UserData);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, isSelected && styles.isCardSelected]}>
      <View style={styles.imageView}>
        {!isVideo ? (
          <Image
            source={imageIndex.programs}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Video
            source={{
              uri: `${constant.baseURL}${constant.exerciseVideo}${item.videoId}`,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }}
            style={styles.image}
            resizeMode="contain"
            paused={true}
          />
        )}
      </View>
      <View style={styles.detailsView}>
        <Text
          allowFontScaling={false}
          numberOfLines={2}
          style={styles.titleText}>
          {item?.title}
        </Text>
        <Text allowFontScaling={false} numberOfLines={2} style={styles.desText}>
          {`${item?.mainMuscle} & ${item?.secondaryMuscle}, ${item?.tags}, ${item?.equipment}`}
        </Text>
      </View>
      {props?.rightIcon && (
        <TouchableOpacity
          onPress={onPressRightIcon}
          activeOpacity={0.8}
          style={styles.deleteIcon}>
          <props.rightIcon />
        </TouchableOpacity>
      )}
      {showCheckBox && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.deleteIcon}
          onPress={onPressCheckBox}>
          {item?.checked ? (
            <SvgIndex.checkboxFilled />
          ) : (
            <SvgIndex.checkboxEmpty />
          )}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default memo(ProgramsCard);
ProgramsCard.defaultProps = {
  showCheckBox: false,
};
