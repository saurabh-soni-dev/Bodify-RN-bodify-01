import {
  Button,
  CalendarCard,
  CustomStatusbar,
  Header,
  OrLine,
} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import moment from 'moment';
import React, {FC} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './datesFilter.style';
import useDatesFilter from './useDatesFilter';

export interface DatesFilterProps {
  calendarData: Array<number>;
  month: number;
  year: number;
  selectedDates: string[];
}
const DatesFilter: FC = () => {
  const {
    datesFilter,
    clearFilter,
    onPressSave,
    handleForwardBackwardMonth,
    daysData,
    onSelectDates,
    isSaveButton,
  } = useDatesFilter();
  return (
    <View style={styles.container}>
      <CustomStatusbar
        barStyle="dark-content"
        backgroundColor={color.primaryBG}
      />
      <View style={styles.mainContainer}>
        <Header
          lable="Dates"
          showBackIcon
          rightButtonText="Clear All"
          onPressRightButton={clearFilter}
          containerStyle={styles.headerContainer}
        />
        <View style={styles.calenderContainer}>
          <View style={styles.calenderCard}>
            <View style={styles.headerButton}>
              <View style={styles.calendarRow}>
                <TouchableOpacity
                  onPress={() => handleForwardBackwardMonth('backward')}>
                  <SvgIndex.leftIcon />
                </TouchableOpacity>
                <Text style={styles.monthYearLabel} allowFontScaling={false}>
                  {`${moment(datesFilter.month + 1, 'MM').format('MMMM')} ${
                    datesFilter.year
                  }`}
                </Text>
                <TouchableOpacity
                  onPress={() => handleForwardBackwardMonth('forward')}>
                  <SvgIndex.rightIcon />
                </TouchableOpacity>
              </View>
            </View>
            <OrLine containerStyle={styles.orLineStyle} />
            <View>
              <View style={styles.dayNameView}>
                {daysData.map((item, index) => (
                  <View key={index} style={styles.mainCalendarView}>
                    <Text style={styles.daysLabel}>{item}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.datesContainer}>
                <FlatList
                  contentContainerStyle={styles.contentContainer}
                  data={datesFilter?.calendarData}
                  numColumns={7}
                  keyExtractor={(_, index) => `${index}`}
                  renderItem={({item, index}) => {
                    return (
                      <CalendarCard
                        item={item}
                        index={index}
                        onPress={() => onSelectDates(item)}
                        selectedDates={datesFilter?.selectedDates}
                        currentMonth={datesFilter?.month}
                        currentYear={datesFilter?.year}
                      />
                    );
                  }}
                />
              </View>
            </View>
            <OrLine containerStyle={styles.orLineStyle} />
            <View style={styles.footerView}>
              <TouchableOpacity activeOpacity={0.8} style={styles.dateCard}>
                <Text style={styles.dateText} allowFontScaling={false}>
                  {datesFilter?.selectedDates?.length > 0
                    ? datesFilter?.selectedDates[0]
                    : 'Start date'}
                  {' - '}
                  {datesFilter?.selectedDates?.length > 1
                    ? `${
                        datesFilter?.selectedDates[
                          datesFilter?.selectedDates?.length - 1
                        ]
                      }`
                    : 'End date'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.btnView}>
          <Button
            disabled={isSaveButton}
            inActive={isSaveButton}
            label="Save"
            onPress={onPressSave}
          />
        </View>
      </View>
    </View>
  );
};

export default DatesFilter;
