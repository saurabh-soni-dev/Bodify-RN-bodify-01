import constant from '@config/constant';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import SvgIndex from '@svgIndex';
import React, {FC, memo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import {styles} from './bodyweightExercise.style';

interface BodyweightExerciseProps {
  item: ExercisesProps;
  index?: number;
  drag?: () => void;
  isActive?: boolean;
  exerciseType?: string;
  isLastIndex?: boolean;
  onPressCheckBox?: () => void;
  onPressDelete?: () => void;
  onPressSets?: () => void;
  onPressMatric?: () => void;
  onPressRestTime?: () => void;
  onPressCoolDown?: () => void;
  onPressUploadVideo?: () => void;
}

export interface ExercisesProps {
  defaultParametersSets: number;
  defaultParametersReps: number;
  restTime: number;
  coolDown: number;
  defaultParametersSetsType: string;
  defaultParametersRepsType: string;
  restTimeType: string;
  coolDownType: string;
  equipment: string;
  exercisesId: string;
  isSelected: boolean;
  mainMuscle: string;
  ownerType: string;
  secondaryMuscle: string;
  tags: string;
  type: string;
  title: string;
  trainerInstructions: string;
  videoId: string;
}
const BodyweightExercise: FC<BodyweightExerciseProps> = ({
  item,
  index,
  drag,
  isActive,
  exerciseType,
  isLastIndex,
  onPressCheckBox,
  onPressDelete,
  onPressSets,
  onPressMatric,
  onPressRestTime,
  onPressCoolDown,
  onPressUploadVideo,
}) => {
  const isCircuit = exerciseType === 'Circuit';
  const isSuperset = exerciseType === 'Superset';
  const isNewExercise = exerciseType === 'NewExercise';
  const isSupersetLastItem = isSuperset && isLastIndex;
  const isCircuitLastItem = isCircuit && isLastIndex;
  const isSet = isCircuit || isSuperset;
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [paused, setPaused] = useState<boolean>(true);
  const videoSource = {
    uri: `${constant.baseURL}${constant.exerciseVideo}${item?.videoId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <View style={styles.container}>
      {/* Header card */}
      <View style={styles.headerCard}>
        <View style={styles.checkBoxRow}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.checkBoxIcon}
            onPress={onPressCheckBox}>
            {item?.isSelected ? (
              <SvgIndex.checkboxFilled height={11} width={11} />
            ) : (
              <SvgIndex.checkboxEmpty height={11} width={11} />
            )}
          </TouchableOpacity>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={styles.backSquatText}>
            {item?.title}
          </Text>
        </View>
        <View style={styles.deleteBoxRow}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.deleteIcon}
            onPress={onPressDelete}>
            <SvgIndex.deleteSolid />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.hambirgIcon}
            onLongPress={drag}>
            <SvgIndex.hamburg />
          </TouchableOpacity>
        </View>
      </View>

      {/* Thumbnail */}
      <View style={styles.thumbnailView}>
        <View style={styles.thumbnail}>
          <TouchableOpacity
            onPress={() => setPaused(!paused)}
            activeOpacity={1}>
            <Video
              source={videoSource}
              resizeMode="cover"
              controls={true}
              muted={true}
              paused={paused}
              style={styles.thumbnailImage}
              onEnd={() => setPaused(!paused)}
            />
          </TouchableOpacity>
          {paused && (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.uploadButton}
              onPress={onPressUploadVideo}>
              <SvgIndex.publish />
              <Text allowFontScaling={false} style={styles.uploadVideoText}>
                Upload video
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Instructions */}
      <View style={styles.instructionView}>
        <View style={styles.instructionHeading}>
          <Text allowFontScaling={false} style={styles.instructionTitle}>
            Coach Instructions
          </Text>
          {item?.trainerInstructions && (
            <Text allowFontScaling={false} style={styles.count}>
              {item?.trainerInstructions?.length}/10000
            </Text>
          )}
        </View>
        <Text allowFontScaling={false} style={styles.instructionValue}>
          {item?.trainerInstructions}
        </Text>
      </View>

      {/* Sets, Metric, Resttime, Cooldown */}
      <View style={styles.metricView}>
        <View style={styles.setsRow}>
          <Text allowFontScaling={false} style={styles.setHeadingText}>
            Sets
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.setsCard}
            onPress={onPressSets}>
            <View
              style={[styles.setNumberView, isSet && styles.isSetNumberView]}>
              <Text allowFontScaling={false} style={styles.setNumberText}>
                {item?.defaultParametersSets}
              </Text>
            </View>
            <View style={styles.verticalLine} />
            <View
              style={[styles.setStringView, isSet && styles.isSetStringView]}>
              <Text allowFontScaling={false} style={styles.setStringText}>
                {item?.defaultParametersSetsType}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.setsRow}>
          <Text allowFontScaling={false} style={styles.setHeadingText}>
            Metric
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.setsCard}
            onPress={onPressMatric}>
            <View
              style={[styles.setNumberView, isSet && styles.isSetNumberView]}>
              <Text allowFontScaling={false} style={styles.setNumberText}>
                {item?.defaultParametersReps}
              </Text>
            </View>
            <View style={styles.verticalLine} />
            <View
              style={[styles.setStringView, isSet && styles.isSetStringView]}>
              <Text allowFontScaling={false} style={styles.setStringText}>
                {item?.defaultParametersRepsType === 'Repetitions'
                  ? 'Reps'
                  : item?.defaultParametersRepsType?.slice(0, 3)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {(isSupersetLastItem || isCircuit || isNewExercise) && (
          <View style={styles.setsRow}>
            <Text allowFontScaling={false} style={styles.setHeadingText}>
              Rest Time
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.setsCard}
              onPress={onPressRestTime}>
              <View
                style={[styles.setNumberView, isSet && styles.isSetNumberView]}>
                <Text allowFontScaling={false} style={styles.setNumberText}>
                  {item?.restTime}
                </Text>
              </View>
              <View style={styles.verticalLine} />
              <View
                style={[styles.setStringView, isSet && styles.isSetStringView]}>
                <Text allowFontScaling={false} style={styles.setStringText}>
                  {item?.restTimeType?.slice(0, 3)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {(isSupersetLastItem || isCircuitLastItem || isNewExercise) && (
          <View style={styles.setsRow}>
            <Text allowFontScaling={false} style={styles.setHeadingText}>
              Cool down
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.setsCard}
              onPress={onPressCoolDown}>
              <View
                style={[styles.setNumberView, isSet && styles.isSetNumberView]}>
                <Text allowFontScaling={false} style={styles.setNumberText}>
                  {item?.coolDown}
                </Text>
              </View>
              <View style={styles.verticalLine} />
              <View
                style={[styles.setStringView, isSet && styles.isSetStringView]}>
                <Text allowFontScaling={false} style={styles.setStringText}>
                  {item?.coolDownType?.slice(0, 3)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default memo(BodyweightExercise);
