import {
  AnalyticsSnapshot,
  Container,
  Dropdown,
  FinancialGraph,
} from '@components';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './analyticsFinancialManagement.style';
import useAnalyticsFinancialManagement from './useAnalyticsFinancialManagement';

export interface AnalyticsFinancialManagementProps {
  payoutList: payoutItemProps[];
  chartInformation: ChartInformationProps[];
  graphFilterOptions: graphFilterOptionsProps[];
  selectedValue: string;
  payOutValue: string;
}
interface payoutItemProps {
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

const AnalyticsFinancialManagement: FC = () => {
  const {
    analyticsFinancialManagement,
    handleChangeValue,
    navigateToFilterScreen,
    onGetGraphData,
  } = useAnalyticsFinancialManagement();

  return (
    <Container
      statusBarShown={false}
      wrapperType="scroll"
      scrollViewProps={{scrollEnabled: false}}
      bounces={false}
      containerViewStyle={styles.containerViewStyle}>
      <Dropdown
        containerStyle={styles.containerStyle}
        placeholder="All Programs"
        placeholderStyle={styles.placeholderStyle}
        mainFilterIconStyle={styles.filterContainer}
        showRightIcon
        onPressRight={navigateToFilterScreen}
      />
      <View style={styles.listView}>
        <AnalyticsSnapshot
          data={analyticsFinancialManagement?.payoutList}
          showFullCard
          onSelectTitle={title => {
            handleChangeValue('payOutValue', title);
            onGetGraphData(title, analyticsFinancialManagement?.selectedValue);
          }}
        />
      </View>
      <FinancialGraph
        title="Payouts"
        chartData={analyticsFinancialManagement?.chartInformation}
        data={analyticsFinancialManagement?.graphFilterOptions}
        showDropdown
        placeholder="Last Week"
        value={analyticsFinancialManagement?.selectedValue}
        // setValue={res => handleChangeValue('selectedValue', res)}
        setValue={res => {
          handleChangeValue('selectedValue', res);
          onGetGraphData(analyticsFinancialManagement?.payOutValue, res);
        }}
        containerStyle={styles.graphContainerStyle}
        titleStyle={styles.graphTitleStyle}
        chartContainerStyle={styles.graphChartStyle}
        dropdownCotainerStyle={styles.graphDropdownContainer}
      />
    </Container>
  );
};

export default AnalyticsFinancialManagement;
