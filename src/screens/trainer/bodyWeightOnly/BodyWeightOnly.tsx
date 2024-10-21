import {BodyweightExercise, UploadCard, WeeksDays} from '@card';
import {
  Button,
  CustomStatusbar,
  ErrorText,
  Header,
  InputContainer,
  Spinner,
} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import Video from 'react-native-video';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import {ExercisesProps} from 'src/components/card/bodyweightExercise/BodyweightExercise';
import {WeeksDaysListProps} from '../programName/ProgramName';
import styles from './bodyWeightOnly.style';
import useBodyWeightOnly from './useBodyWeightOnly';

export interface BodyWeightOnlyProps {
  programId: string;
  programName: string;
  weeksDaysList: WeeksDaysListProps[];
  initialVisibleWeeks: number;
  showAllWeeks: boolean;
  currentIndex: number;
  weeklyId: string;
  sessionName: string;
  workoutIntroVideo: string;
  workoutSummaryVideo: string;
  isLoading: boolean;
  isBackLoading: boolean;
  selectedExercises: ExercisesProps[];
  supersetAndCircuit: supersetAndCircuitProps[];
  selectType?: string;
  selectedWeekAndDay: SelectedWeekAndDayProps[];
  setButtons: string[];
  dataCount: number;
  selectedType: 'Sets' | 'Reps' | 'restTime' | 'coolDown';
  selectedIndex?: number;
  selectedSupersetIndex?: number;
  paused: boolean;
  summaryPaused: boolean;
}
export interface BodyWeightOnlyErrorProps {
  sessionNameError?: string;
  exerciseError?: string;
}
interface SelectedWeekAndDayProps {
  weekName: string;
  dayName: string;
}
export interface supersetAndCircuitProps {
  exercisesList: ExercisesProps[];
  type: string;
  isSetEnable: boolean;
  isSet: boolean;
}
interface OptionsConfig {
  length: number;
  types: string[];
}

const BodyWeightOnly: FC = () => {
  const {
    bodyWeightOnlyState,
    bodyWeightOnlyError,
    updateBodyWeightOnlyState,
    isAddNewSession,
    isUpArrowDisabled,
    isDownArrowDisabled,
    onChangeWeek,
    onSelectWeekOfDays,
    uploadWorkoutVideo,
    navigateToNewExercise,
    validateCreateSession,
    onPressBack,
    onCreateSupersetAndCircuit,
    onUploadExerciseVideo,
    onRemoveSupersetAndCircuit,
    onSelectExercise,
    onDeleteExercise,
    isRemoveButton,
    onDragEnd,
    refRBSheetTableSets,
    openBottomSheet,
    onSelectSetsMetric,
  } = useBodyWeightOnly();

  const renderScrollPicker = (
    dataSource: string[],
    onValueChange: (data: string, index: number) => void,
  ) => (
    <ScrollPicker
      dataSource={dataSource}
      renderItem={(data, index, isSelected) => (
        <Text
          style={[
            styles.selectOptionBottomSheetStyle,
            isSelected && styles.selectActiveOptionBottomSheetStyle,
          ]}>
          {data}
        </Text>
      )}
      onValueChange={onValueChange}
      wrapperHeight={170}
      wrapperBackground={color.secondaryBG}
      itemHeight={40}
      highlightBorderWidth={0}
      highlightColor={color.secondaryBG}
    />
  );

  const renderRBSheetContent = () => {
    if (!bodyWeightOnlyState?.selectedType) return null;
    const optionsConfig: Record<string, OptionsConfig> = {
      Reps: {length: 999, types: ['Seconds', 'Minutes', 'Repetitions']},
      Sets: {length: 999, types: ['Sets']},
      restTime: {length: 999, types: ['Seconds', 'Minutes']},
      coolDown: {length: 999, types: ['Seconds', 'Minutes']},
    };
    const {length: optionsLength = 90, types: typeOptions = []} =
      optionsConfig[bodyWeightOnlyState?.selectedType] || {};
    const options = Array.from({length: optionsLength}, (_, i) =>
      (i + 1).toString(),
    );

    const superset =
      bodyWeightOnlyState?.selectedSupersetIndex !== undefined ? 1 : 0;

    return (
      <View style={styles.flexRowBottomSheetStyle}>
        {renderScrollPicker(options, data =>
          onSelectSetsMetric(
            data,
            bodyWeightOnlyState?.selectedType,
            'Value',
            superset,
          ),
        )}
        {typeOptions?.length > 0 &&
          renderScrollPicker(typeOptions, data =>
            onSelectSetsMetric(
              data,
              bodyWeightOnlyState?.selectedType,
              'Type',
              superset,
            ),
          )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomStatusbar
        barStyle="dark-content"
        backgroundColor={color.transparent}
      />
      <Header
        showBackIcon
        lable={bodyWeightOnlyState?.programName ?? 'BodyWeight Only'}
        containerStyle={styles.headerContainer}
        lableStyle={styles.headerText}
        onPressBackIcon={onPressBack}
      />
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View style={styles.weekListView}>
          <View style={styles.arrowView}>
            <TouchableHighlight
              underlayColor={color.lightgray}
              disabled={isUpArrowDisabled}
              activeOpacity={0.6}
              onPress={() => onChangeWeek('PrevIndex')}
              style={styles.arrowBtn}>
              {isUpArrowDisabled ? (
                <SvgIndex.disabledUpArrow />
              ) : (
                <SvgIndex.arrowUp />
              )}
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={color.lightgray}
              disabled={isDownArrowDisabled}
              activeOpacity={0.6}
              onPress={() => onChangeWeek('NextIndex')}
              style={styles.arrowBtn}>
              {isDownArrowDisabled ? (
                <SvgIndex.disabledDownArrow />
              ) : (
                <SvgIndex.downArrowLine />
              )}
            </TouchableHighlight>
          </View>
          <FlatList
            data={[
              ...bodyWeightOnlyState?.weeksDaysList?.slice(
                bodyWeightOnlyState?.currentIndex,
                bodyWeightOnlyState?.currentIndex + 1,
              ),
            ]}
            keyExtractor={(_, index) => {
              return `${index}`;
            }}
            contentContainerStyle={styles.contentContainerWeekStyle}
            renderItem={({item, index}) => (
              <WeeksDays
                key={item?.id}
                item={item}
                index={index}
                onPressDay={res =>
                  onSelectWeekOfDays(
                    res,
                    bodyWeightOnlyState?.currentIndex,
                    item?.weekName,
                  )
                }
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* session details */}
        <View style={styles.sessionDetail}>
          {bodyWeightOnlyState?.selectedWeekAndDay?.length > 0 && (
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.sessionText}>
              {`${bodyWeightOnlyState?.selectedWeekAndDay[0]?.weekName} Day ${bodyWeightOnlyState?.selectedWeekAndDay[0]?.dayName}`}
            </Text>
          )}
          <InputContainer
            placeholder="Enter Session Name"
            placeholderTextColor={color.primaryText}
            label="Session Name"
            labelStyle={styles.labelText}
            lableRowStyle={styles.lableRowStyle}
            inputContainerStyle={styles.inputContainer}
            value={bodyWeightOnlyState?.sessionName}
            onChangeText={text =>
              updateBodyWeightOnlyState('sessionName', text)
            }
            error={bodyWeightOnlyError?.sessionNameError}
            errorLabelStyle={styles.errorLabelStyle}
            maxLength={50}
            inputProps={{autoCorrect: true}}
            keyboardType="default"
          />
          <View style={styles.introVideoView}>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.labelText}>
              Add workout intro{'  '}
              <Text allowFontScaling={false} style={styles.optionalText}>
                (optional)
              </Text>
            </Text>
            <View style={styles.introUpload}>
              {!bodyWeightOnlyState?.workoutIntroVideo ? (
                <TouchableOpacity
                  style={styles.uploadCard}
                  onPress={() => uploadWorkoutVideo('Intro')}>
                  <SvgIndex.upload />
                  <Text allowFontScaling={false} style={styles.uploadDes}>
                    Upload your trailer video{'\n'} add a 9:16 ratio video
                  </Text>
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      updateBodyWeightOnlyState(
                        'paused',
                        !bodyWeightOnlyState.paused,
                      )
                    }
                    activeOpacity={1}>
                    <Video
                      source={{uri: bodyWeightOnlyState?.workoutIntroVideo}}
                      resizeMode="cover"
                      controls={true}
                      muted={true}
                      key={bodyWeightOnlyState?.workoutIntroVideo}
                      paused={bodyWeightOnlyState.paused}
                      style={styles.introVideo}
                      onEnd={() =>
                        updateBodyWeightOnlyState(
                          'paused',
                          !bodyWeightOnlyState.paused,
                        )
                      }
                    />
                  </TouchableOpacity>
                  {bodyWeightOnlyState.paused && (
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.uploadButton}
                      onPress={() => uploadWorkoutVideo('Intro')}>
                      <SvgIndex.publish />
                      <Text
                        allowFontScaling={false}
                        style={styles.uploadVideoText}>
                        Upload video
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            {/* Buttons (superset & circuit) */}
            <View style={styles.buttonView}>
              {!isRemoveButton && bodyWeightOnlyState?.selectType ? (
                bodyWeightOnlyState?.supersetAndCircuit?.map((sup, index) => {
                  const allSelected =
                    bodyWeightOnlyState?.supersetAndCircuit?.some(sup =>
                      sup?.exercisesList?.every(
                        exercise => exercise?.isSelected,
                      ),
                    );
                  const allExercisesUnselected = sup.exercisesList.every(
                    exercise => !exercise.isSelected,
                  );
                  const nextIndexAllSelected =
                    index < bodyWeightOnlyState?.supersetAndCircuit.length - 1
                      ? bodyWeightOnlyState?.supersetAndCircuit[
                          index + 1
                        ].exercisesList.every(exercise => exercise.isSelected)
                      : false;
                  const selectedIndices =
                    bodyWeightOnlyState?.supersetAndCircuit
                      ?.filter(sup =>
                        sup.exercisesList.every(
                          exercise => exercise.isSelected,
                        ),
                      )
                      ?.map(sup =>
                        bodyWeightOnlyState?.supersetAndCircuit?.indexOf(sup),
                      );
                  return (
                    index == 0 && (
                      <TouchableHighlight
                        style={styles.removeBtn}
                        underlayColor={color.paleLavender}
                        disabled={!allSelected}
                        onPress={() =>
                          onRemoveSupersetAndCircuit(selectedIndices)
                        }>
                        <View style={styles.btnRow}>
                          <Text
                            allowFontScaling={false}
                            style={styles.removeBtnTitle}>
                            {allExercisesUnselected
                              ? nextIndexAllSelected
                                ? `Remove ${
                                    bodyWeightOnlyState?.supersetAndCircuit[
                                      index + 1
                                    ]?.type
                                  }`
                                : `Remove ${sup?.type}`
                              : `Remove ${sup?.type}`}
                          </Text>
                          <SvgIndex.minus />
                        </View>
                      </TouchableHighlight>
                    )
                  );
                })
              ) : (
                <>
                  {bodyWeightOnlyState?.setButtons?.map(button => (
                    <TouchableHighlight
                      style={styles.supersetBtn}
                      disabled={
                        bodyWeightOnlyState?.selectedExercises?.filter(
                          ex => ex?.isSelected,
                        )?.length < 2
                      }
                      underlayColor={color.paleLavender}
                      onPress={() =>
                        onCreateSupersetAndCircuit(button?.toString())
                      }>
                      <View style={styles.btnRow}>
                        <Text allowFontScaling={false} style={styles.btnTitle}>
                          {button}
                        </Text>
                        <SvgIndex.plusPurple />
                      </View>
                    </TouchableHighlight>
                  ))}
                </>
              )}
            </View>
            {/* exercise card */}
            {bodyWeightOnlyState?.supersetAndCircuit?.filter(
              item => item?.isSet,
            )?.length != 0 && (
              <>
                {bodyWeightOnlyState?.supersetAndCircuit?.map((sup, idx) => (
                  <View style={styles.supersetList}>
                    <View style={styles.header}>
                      <Text allowFontScaling={false} style={styles.headingText}>
                        {sup?.type ? sup?.type : 'Title'}
                      </Text>
                      <TouchableHighlight style={styles.headingHamburg}>
                        <SvgIndex.hamburgPurpal />
                      </TouchableHighlight>
                    </View>
                    <DraggableFlatList
                      contentContainerStyle={styles.dragContentContainer}
                      data={sup?.exercisesList}
                      keyExtractor={(_, index) => {
                        return `${index}`;
                      }}
                      renderItem={({item, drag, isActive, getIndex}) => {
                        const index = getIndex() as number;
                        const isLastIndex =
                          index === sup?.exercisesList?.length - 1;
                        return (
                          <BodyweightExercise
                            key={item?.exercisesId}
                            item={item}
                            drag={drag}
                            isActive={isActive}
                            index={index}
                            onPressCheckBox={() =>
                              onSelectExercise('Set', '', index, idx)
                            }
                            onPressDelete={() =>
                              onDeleteExercise('Set', '', index, idx)
                            }
                            onPressUploadVideo={() =>
                              onUploadExerciseVideo('Set', item, idx)
                            }
                            exerciseType={
                              bodyWeightOnlyState?.supersetAndCircuit[idx]?.type
                            }
                            isLastIndex={isLastIndex}
                            onPressSets={() =>
                              openBottomSheet('Sets', index, idx)
                            }
                            onPressMatric={() =>
                              openBottomSheet('Reps', index, idx)
                            }
                            onPressRestTime={() =>
                              openBottomSheet('restTime', index, idx)
                            }
                            onPressCoolDown={() =>
                              openBottomSheet('coolDown', index, idx)
                            }
                          />
                        );
                      }}
                      onDragEnd={({data}) => onDragEnd(data, idx)}
                      showsVerticalScrollIndicator={false}
                    />
                    <TouchableHighlight
                      style={styles.exerciseCard}
                      underlayColor={color.lightgray}
                      onPress={() => navigateToNewExercise('FromSet', idx)}>
                      <Text
                        allowFontScaling={false}
                        style={styles.exerciseCardText}>
                        {'+  '}New Exercise
                      </Text>
                    </TouchableHighlight>
                  </View>
                ))}
              </>
            )}
            {bodyWeightOnlyState?.selectedExercises?.length !== 0 && (
              <View style={styles.exerciseList}>
                <DraggableFlatList
                  contentContainerStyle={styles.dragContentContainer}
                  data={bodyWeightOnlyState?.selectedExercises}
                  keyExtractor={(_, index) => {
                    return `${index}`;
                  }}
                  renderItem={({item, drag, isActive, getIndex}) => {
                    const index = getIndex();
                    return (
                      <BodyweightExercise
                        key={item?.exercisesId}
                        item={item}
                        drag={drag}
                        isActive={isActive}
                        index={index}
                        exerciseType={'NewExercise'}
                        onPressCheckBox={() =>
                          onSelectExercise('Exercise', item?.exercisesId)
                        }
                        onPressDelete={() =>
                          onDeleteExercise('Exercise', item?.exercisesId)
                        }
                        onPressUploadVideo={() =>
                          onUploadExerciseVideo('NewExercise', item, index)
                        }
                        onPressSets={() => openBottomSheet('Sets', index)}
                        onPressMatric={() => openBottomSheet('Reps', index)}
                        onPressRestTime={() =>
                          openBottomSheet('restTime', index)
                        }
                        onPressCoolDown={() =>
                          openBottomSheet('coolDown', index)
                        }
                      />
                    );
                  }}
                  onDragEnd={({data}) =>
                    updateBodyWeightOnlyState('selectedExercises', data)
                  }
                  showsVerticalScrollIndicator={false}
                />
              </View>
            )}
            <TouchableHighlight
              style={styles.exerciseCard}
              underlayColor={color.lightgray}
              onPress={() => navigateToNewExercise('NewExercise')}>
              <Text allowFontScaling={false} style={styles.exerciseCardText}>
                {'+  '}New Exercise
              </Text>
            </TouchableHighlight>
            <View style={styles.error}>
              <ErrorText error={bodyWeightOnlyError?.exerciseError} />
            </View>
          </View>
          <View style={styles.introVideoView}>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.labelText}>
              Add workout summary{'  '}
              <Text allowFontScaling={false} style={styles.optionalText}>
                (optional)
              </Text>
            </Text>
            <View style={styles.introUpload}>
              {!bodyWeightOnlyState?.workoutSummaryVideo ? (
                <TouchableOpacity
                  style={styles.uploadCard}
                  onPress={() => uploadWorkoutVideo('Summary')}>
                  <SvgIndex.upload />
                  <Text allowFontScaling={false} style={styles.uploadDes}>
                    Upload your trailer video{'\n'} add a 9:16 ratio video
                  </Text>
                </TouchableOpacity>
              ) : (
                // <Video
                //   source={{uri: bodyWeightOnlyState?.workoutSummaryVideo}}
                //   resizeMode="cover"
                //   style={styles.introVideo}
                //   muted={true}
                //   paused={true}
                //   controls={true}
                // />

                <>
                  <TouchableOpacity
                    onPress={() =>
                      updateBodyWeightOnlyState(
                        'summaryPaused',
                        !bodyWeightOnlyState.summaryPaused,
                      )
                    }
                    activeOpacity={1}>
                    <Video
                      source={{uri: bodyWeightOnlyState?.workoutSummaryVideo}}
                      resizeMode="cover"
                      controls={true}
                      muted={true}
                      key={bodyWeightOnlyState?.workoutSummaryVideo}
                      paused={bodyWeightOnlyState.summaryPaused}
                      style={styles.introVideo}
                      onEnd={() =>
                        updateBodyWeightOnlyState(
                          'summaryPaused',
                          !bodyWeightOnlyState.summaryPaused,
                        )
                      }
                    />
                  </TouchableOpacity>
                  {bodyWeightOnlyState.summaryPaused && (
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.uploadButton}
                      onPress={() => uploadWorkoutVideo('Summary')}>
                      <SvgIndex.publish />
                      <Text
                        allowFontScaling={false}
                        style={styles.uploadVideoText}>
                        Upload video
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </View>
          </View>
        </View>
        <View style={styles.btnView}>
          <Button
            disabled={isAddNewSession}
            inActive={isAddNewSession}
            isLoading={bodyWeightOnlyState?.isLoading}
            onPress={() => validateCreateSession(0)}
            label="Add new Session"
          />
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheetTableSets}
        height={230}
        customStyles={{
          container: styles.bottomSheetList,
        }}>
        {renderRBSheetContent()}
      </RBSheet>
      <Spinner
        visible={bodyWeightOnlyState.isBackLoading}
        label="Submitting session details"
      />
    </View>
  );
};

export default BodyWeightOnly;
