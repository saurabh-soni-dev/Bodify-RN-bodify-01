import {AnalyticsCarousel} from '@card';
import {Dropdown, FinancialGraph} from '@components';
import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './overview.style';
import useOverview from './useOverview';

export interface OverviewProps {
  overviewList: OverviewItemProps[];
  chartInformation: ChartInformationProps[];
  graphFilterOptions: graphFilterOptionsProps[];
  selectedValue: string;
  overSelectValue: string;
}
interface OverviewItemProps {
  id: number;
  data: OverviewDataItem[];
}
interface OverviewDataItem {
  id: number;
  title: string;
  amount: string;
  description: string;
  progress: string;
}
interface ChartInformationProps {
  value: number;
  date?: string;
}
interface graphFilterOptionsProps {
  id: number;
  title: string;
}

const Overview: FC = () => {
  const {
    overviewInfo,
    navigateToFilterScreen,
    onGetGraphData,
    updateOverviewState,
  } = useOverview();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Dropdown
          containerStyle={styles.dropdownContainer}
          placeholder="All Programs"
          placeholderStyle={styles.placeholderStyle}
          showRightIcon
          onPressRight={navigateToFilterScreen}
          mainFilterIconStyle={styles.filterContainer}
          isShowScaleFilterIcon
        />
        <AnalyticsCarousel
          data={overviewInfo?.overviewList}
          onSelectTitle={title => {
            updateOverviewState('overSelectValue', title);
            onGetGraphData(title, overviewInfo?.selectedValue);
          }}
        />
        <FinancialGraph
          title="Total Programs"
          chartData={overviewInfo?.chartInformation}
          data={overviewInfo?.graphFilterOptions}
          showDropdown
          placeholder="Last Week"
          value={overviewInfo?.selectedValue}
          setValue={res => {
            updateOverviewState('selectedValue', res);
            onGetGraphData(overviewInfo?.overSelectValue, res);
          }}
          containerStyle={styles.graphContainerStyle}
          titleStyle={styles.graphTitleStyle}
          chartContainerStyle={styles.graphChartStyle}
          dropdownCotainerStyle={styles.graphDropdownContainer}
        />
      </ScrollView>
    </View>
  );
};

export default Overview;
