import {AnalyticsCarousel} from '@card';
import {Dropdown, FinancialGraph} from '@components';
import SvgIndex from '@svgIndex';
import React, {FC} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './programManagement.style';
import useProgramManagement from './useProgramManagement';
import {
  percentageHeight,
  percentageWidth,
} from '@utility/functions/dimensionsScale';

export interface ProgramManagementProps {
  programOverviewList: ProgramOverviewItemProps;
  chartInformation: ChartInformationProps[];
  graphFilterOptions: graphFilterOptionsProps[];
  selectedValue: string;
  selectedEarnValue: string;
}
interface ProgramOverviewItemProps {
  Price: string;
  status: string;
  data: ProgramOverItem[];
}
interface ProgramOverItem {
  id: number;
  data: ProgramOverviewDataItem[];
}
interface ProgramOverviewDataItem {
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

const ProgramManagement: FC = () => {
  const {
    programManagement,
    updateProgramManagementState,
    navigateToFilterScreen,
    onGetGraphData,
  } = useProgramManagement();
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
        <View style={styles.priceRowViewStyle}>
          <View style={styles.rowDollorIconView}>
            <SvgIndex.dollorBorderIcon
              height={percentageHeight(2.6)}
              width={percentageWidth(5.3)}
            />
            <View style={styles.textManageTextView}>
              <Text allowFontScaling={false} style={styles.priceTextStyle}>
                Price
              </Text>
              <Text allowFontScaling={false} style={styles.priceUKTextStyle}>
                {programManagement?.programOverviewList?.Price}
              </Text>
            </View>
          </View>
          <View style={styles.activeCardStyleView}>
            <View style={styles.activePoinStyle} />
            <Text allowFontScaling={false} style={styles.activeTextPoint}>
              {programManagement?.programOverviewList?.status}
            </Text>
          </View>
        </View>
        <AnalyticsCarousel
          data={programManagement?.programOverviewList?.data}
          onSelectTitle={title => {
            updateProgramManagementState('selectedEarnValue', title);
            onGetGraphData(title, programManagement?.selectedValue);
          }}
        />
        <FinancialGraph
          title="Total Subscribers"
          chartData={programManagement?.chartInformation}
          data={programManagement?.graphFilterOptions}
          showDropdown
          placeholder="Last Week"
          value={programManagement?.selectedValue}
          setValue={res => {
            updateProgramManagementState('selectedValue', res);
            onGetGraphData(programManagement?.selectedEarnValue, res);
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

export default ProgramManagement;
