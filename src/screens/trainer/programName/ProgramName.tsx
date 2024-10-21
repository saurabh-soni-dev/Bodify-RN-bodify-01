import {SessionCard, WeeksDays} from '@card';
import {Button, CustomStatusbar, Header} from '@components';
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
import RBSheet from 'react-native-raw-bottom-sheet';
import {SessionItemProps} from 'src/components/card/sessionCard/SessionCard';
import styles from './programName.style';
import useProgramName from './useProgramName';

export type valueTypes =
  | string
  | boolean
  | number
  | undefined
  | Array<number>
  | object;
export interface ProgramNameProps {
  programInfo: ProgramInfoProps;
  weeksDaysList: WeeksDaysListProps[];
  currentIndex: number;
  showAllWeeks: boolean;
  isCreateSession: boolean;
  weeklyId: string;
  weeklyData: SessionItemProps[];
  selectedDay: string;
  selectedWeek: string;
  dataCount: number;
}
interface ProgramInfoProps {
  programId?: string;
  programsName?: string;
}
export interface WeeksDaysListProps {
  id: number;
  weekName: string;
  days: DaysProps[];
}
export interface DaysProps {
  id: number;
  dayName: string;
  isSelected: boolean;
  isBorder: boolean;
}

const ProgramName: FC = () => {
  const {
    programName,
    refRBSheet,
    onChangeWeek,
    onSelectWeekOfDays,
    openBottomSheet,
    navigateToBodyWeightOnly,
    navigateToDuplicateSession,
    isReviewButton,
    isUpArrowDisabled,
    isDownArrowDisabled,
    updateProgramNameState,
    navigateToWorkoutPlanScreen,
    onSave,
  } = useProgramName();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        barStyle="dark-content"
        backgroundColor={color.transparent}
      />
      <Header
        showBackIcon
        lable={programName?.programInfo?.programsName ?? 'Program name'}
        containerStyle={styles.headerContainer}
        lableStyle={styles.headerText}
      />
      <ScrollView
        style={styles.mainContainer}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.listView}>
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
              ...programName?.weeksDaysList?.slice(
                programName?.currentIndex,
                programName?.currentIndex + 3,
              ),
            ]}
            keyExtractor={(_, index) => {
              return `${index}`;
            }}
            contentContainerStyle={styles.contentContainerWeekStyle}
            renderItem={({item, index}) => (
              <WeeksDays
                key={index}
                item={item}
                index={index}
                onPressDay={res => {
                  onSelectWeekOfDays(res, index, item?.weekName, item?.id);
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={styles.horizontalLine} />
            )}
          />
        </View>
        <View style={styles.sessionList}>
          {!programName?.weeklyData?.length ? (
            <View style={styles.sessionMainView}>
              <View style={styles.emptyListIcon}>
                <SvgIndex.sessionSheet />
              </View>
              <Text allowFontScaling={false} style={styles.sessionsTxtStyle}>
                You haven't set up any{'\n'} sessions for this day
              </Text>
              <TouchableOpacity
                onPress={navigateToBodyWeightOnly}
                disabled={!programName?.isCreateSession}
                style={[
                  styles.clipStyleSecond,
                  {
                    backgroundColor: programName?.isCreateSession
                      ? color.primary
                      : color.disablePrimary,
                  },
                ]}>
                <SvgIndex.plus />
                <Text allowFontScaling={false} style={styles.clipTextSecond}>
                  Create New Session
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <View style={styles.titleView}>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  style={styles.titleText}>
                  {`Week ${programName?.selectedWeek} Day ${programName?.selectedDay}`}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={navigateToBodyWeightOnly}
                  style={styles.addNewSessionBtn}>
                  <Text
                    allowFontScaling={false}
                    numberOfLines={1}
                    style={styles.btnText}>
                    Add New Session
                  </Text>
                </TouchableOpacity>
              </View>
              <DraggableFlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={programName?.weeklyData}
                keyExtractor={(_, index) => {
                  return `${index}`;
                }}
                renderItem={({item, drag, isActive, getIndex}) => {
                  const index = getIndex() as number;
                  return (
                    <SessionCard
                      key={index}
                      item={item}
                      index={index}
                      drag={drag}
                      isActive={isActive}
                      onPressSession={openBottomSheet}
                    />
                  );
                }}
                onDragEnd={({data}) =>
                  updateProgramNameState('weeklyData', data)
                }
                showsVerticalScrollIndicator={false}
              />
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.rowViewManageButton}>
        <Button
          label="Save"
          containerStyle={styles.saveButtonStyle}
          nameTextStyle={styles.saveButtonTextStyle}
          onPress={onSave}
        />
        <Button
          label="Review"
          disabled={!isReviewButton}
          inActive={!isReviewButton}
          containerStyle={styles.reviewButtonStyle}
          onPress={navigateToWorkoutPlanScreen}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        customStyles={{
          wrapper: styles.wrapperBg,
          container: styles.bottomMenuSheetContainer,
        }}>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.showBottomCardStyle}>
            <SvgIndex.editBorder />
            <Text allowFontScaling={false} style={styles.showOptionBottom}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToDuplicateSession}
            activeOpacity={0.8}
            style={styles.showBottomCardStyle}>
            <SvgIndex.copy />
            <Text allowFontScaling={false} style={styles.showOptionBottom}>
              Duplicate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.showBottomCardStyle}>
            <SvgIndex.deletePurpal />
            <Text allowFontScaling={false} style={styles.showOptionBottom}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default ProgramName;
