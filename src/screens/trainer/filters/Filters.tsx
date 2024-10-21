import {FilterCard} from '@card';
import {Button, Container} from '@components';
import React, {FC, useCallback} from 'react';
import {Text, View} from 'react-native';
import RangeSlider from 'rn-range-slider';
import {styles} from './filters.style';
import useFilters from './useFilters';
export interface FilterState {
  filterData: FilterItemProps[];
  library: MuscleListItemProps[];
  type: MuscleListItemProps[];
  mainMuscle: MuscleListItemProps[];
  level: MuscleListItemProps[];
  status: MuscleListItemProps[];
  lowPrice: number;
  highPrice: number;
  lowWeek: number;
  highWeek: number;
  isClear: boolean;
}
export interface FilterItemProps {
  id: number;
  title: string;
}
export interface MuscleListItemProps {
  id: number;
  title: string;
  checked: boolean;
}
const Filters: FC = () => {
  const {
    onSelectFilters,
    filter,
    params,
    onValueChangePrice,
    onSaveToNavigateExercise,
    onClearAllFilters,
    isSaveButton,
    onValueChangeWeek,
  } = useFilters();

  const renderPriceThumb = useCallback(
    (value: string) => (
      <>
        <View style={styles.thumbStyleView} />
        <View
          style={[
            value == 'low'
              ? styles.priceLabelLowViewStyle
              : styles.priceLabelViewStyle,
          ]}>
          <Text allowFontScaling={false} style={styles.labelSliderText}>
            ${value == 'low' ? filter?.lowPrice : filter?.highPrice}
          </Text>
        </View>
      </>
    ),
    [filter],
  );

  const renderWeekThumb = useCallback(
    (value: string) => (
      <>
        <View style={styles.thumbStyleView} />
        <View
          style={[
            value == 'low'
              ? styles.weeksLabelLowViewStyle
              : styles.weeksLabelViewStyle,
          ]}>
          <Text allowFontScaling={false} style={styles.labelSliderText}>
            {value == 'low' ? filter?.lowWeek : filter?.highWeek} weeks
          </Text>
        </View>
      </>
    ),
    [filter],
  );

  const renderRail = useCallback(
    () => <View style={styles.unSelectSliderStyle} />,
    [],
  );

  const renderRailSelected = useCallback(
    () => <View style={styles.selectSliderStyle} />,
    [],
  );
  return (
    <Container
      wrapperType="scroll"
      headerShown
      showBackIcon
      lable="Filters"
      rightButtonText="Clear All"
      onPressRightButton={onClearAllFilters}
      onPressBackIcon={onSaveToNavigateExercise}
      scrollContainerStyle={styles.screenBackgroundStyle}
      containerViewStyle={styles.screenBackgroundStyle}
      containerStyle={styles.headerContainerStyle}>
      <View style={styles.inputContentContainers}>
        {params?.filterScreenType == 'myPrograms' ? (
          <View>
            <FilterCard
              label="Level"
              value={
                filter?.level
                  ?.map((value: FilterItemProps) => value?.title)
                  ?.join(', ') || 'Beginner, Intermediate, Advanced'
              }
              onPress={() => onSelectFilters('LevelPrograms')}
            />
            <View style={styles.cardView}>
              <View style={styles.rowViewStyle}>
                <Text allowFontScaling={false} style={styles.labelStyle}>
                  {'Price'}
                </Text>
              </View>
              <View style={styles.multiSliderView}>
                <RangeSlider
                  min={10}
                  max={params?.maxPrice ?? 50}
                  step={1}
                  renderThumb={(value: string) => renderPriceThumb(value)}
                  renderRail={renderRail}
                  renderRailSelected={renderRailSelected}
                  onValueChanged={onValueChangePrice}
                  low={filter?.lowPrice}
                  high={filter?.highPrice}
                  disabled={
                    filter?.highPrice - filter?.lowPrice < 300 ||
                    10 === params?.maxPrice
                  }
                />
              </View>
              <View style={styles.outLineSlider} />
            </View>
            <FilterCard
              label="Status"
              value={
                filter?.status
                  ?.map((value: FilterItemProps) => value?.title)
                  ?.join(', ') || 'Active, Deactivated, Draft'
              }
              onPress={() => onSelectFilters('Status')}
            />
            <View style={styles.cardView}>
              <View style={styles.rowViewStyle}>
                <Text allowFontScaling={false} style={styles.labelStyle}>
                  {'Length'}
                </Text>
              </View>
              <View style={styles.multiSliderView}>
                <RangeSlider
                  min={1}
                  max={params?.maxWeeks ?? 52}
                  step={1}
                  renderThumb={value => renderWeekThumb(value)}
                  renderRail={renderRail}
                  renderRailSelected={renderRailSelected}
                  onValueChanged={onValueChangeWeek}
                  low={filter?.lowWeek}
                  high={filter?.highWeek}
                  disabled={1 === params?.maxWeeks}
                />
              </View>
              <View style={styles.outLineSlider} />
            </View>
          </View>
        ) : (
          <>
            {params?.filterScreenType == 'Exercise' && (
              <FilterCard
                label="Library"
                value={
                  filter?.library
                    ?.map((value: FilterItemProps) => value?.title)
                    ?.join(', ')
                    .toString() || 'Select Library'
                }
                onPress={() => onSelectFilters('Library')}
              />
            )}
            <FilterCard
              label="Type"
              value={
                filter?.type
                  ?.map((value: FilterItemProps) => value?.title)
                  ?.join(', ')
                  .toString() || 'Select Type'
              }
              onPress={() => onSelectFilters('Type')}
            />
            <FilterCard
              label="Main Muscle"
              value={
                filter?.mainMuscle
                  ?.map((value: FilterItemProps) => value?.title)
                  ?.join(', ')
                  .toString() || 'Select Main Muscle'
              }
              onPress={() => onSelectFilters('Main Muscle')}
            />
          </>
        )}
      </View>
      <Button
        label="Save"
        onPress={onSaveToNavigateExercise}
        containerStyle={styles.bottonView}
        // disabled={isSaveButton}
        // inActive={isSaveButton}
      />
    </Container>
  );
};

export default Filters;
