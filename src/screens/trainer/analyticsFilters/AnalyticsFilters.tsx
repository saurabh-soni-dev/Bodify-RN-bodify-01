import {Button, CustomStatusbar, Header} from '@components';
import color from '@theme/color';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './analyticsFilters.style';
import useAnalyticsFilters from './useAnalyticsFilters';

export interface AnalyticsFiltersProps {
  device?: string;
  date?: {startDate?: string; endDate?: string};
  location?: string;
}
const AnalyticsFilters: FC = () => {
  const {
    filterInfo,
    onPressFilter,
    onClearAllFilters,
    isSaveButton,
    onPressSave,
  } = useAnalyticsFilters();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        barStyle="dark-content"
        backgroundColor={color.primaryBG}
      />
      <View style={styles.mainContainer}>
        <Header
          lable="Filters"
          showBackIcon
          rightButtonText="Clear All"
          onPressRightButton={onClearAllFilters}
        />
        <View style={styles.filterContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.row}
            onPress={() => onPressFilter(1)}>
            <Text style={styles.titleText} allowFontScaling={false}>
              Device
            </Text>
            <Text style={styles.valueText} allowFontScaling={false}>
              {filterInfo?.device ? filterInfo?.device : 'Select device'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.row}
            onPress={() => onPressFilter(2)}>
            <Text style={styles.titleText} allowFontScaling={false}>
              Dates
            </Text>
            <Text style={styles.valueText} allowFontScaling={false}>
              {filterInfo?.date?.startDate
                ? filterInfo?.date?.startDate?.toString()
                : 'Start date'}
              {' - '}
              {filterInfo?.date?.startDate
                ? filterInfo?.date?.endDate?.toString()
                : 'End date'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.row}
            onPress={() => onPressFilter(3)}>
            <Text style={styles.titleText} allowFontScaling={false}>
              Country
            </Text>
            <Text style={styles.valueText} allowFontScaling={false}>
              {filterInfo?.location ? filterInfo?.location : 'Select location'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <Button
            label="Save"
            disabled={!isSaveButton}
            inActive={!isSaveButton}
            onPress={onPressSave}
          />
        </View>
      </View>
    </View>
  );
};

export default AnalyticsFilters;
