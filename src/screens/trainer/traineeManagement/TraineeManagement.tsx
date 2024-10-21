import {
  AnalyticsSnapshot,
  CollapsibleCard,
  Container,
  Dropdown,
  FinancialGraph,
} from '@components';
import svgIndex from '@svgIndex';
import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './traineeManagement.style';
import useTraineeManagement from './useTraineeManagement';

export interface TraineeManagementProps {
  traineeList: TraineeListProps[];
  chartInformation: ChartInformationProps[];
  graphFilterOptions: graphFilterOptionsProps[];
  subscriptions: subscriptionsProps[];
  selectedValue: string;
  isExpandedAll: boolean;
  selectSubscribersValue: string;
}
interface subscriptionsProps {
  id: number;
  title: string;
  descriptions: string;
  dateOfSub: string;
  leftDuration: string;
  validUpto: string;
  country: string;
  pricePaid: string;
  device: string;
}
interface TraineeListProps {
  id: number;
  title: string;
  amount: string;
  description: string;
}
interface ChartInformationProps {
  value: number;
  date?: string;
}
interface graphFilterOptionsProps {
  id: number;
  title: string;
}

const TraineeManagement: FC = () => {
  const {
    traineeManagement,
    updateTraineeManagementState,
    handleExpandAll,
    navigateToFilterScreen,
    onGetGraphData,
  } = useTraineeManagement();
  return (
    <Container
      statusBarShown={false}
      wrapperType="scroll"
      containerViewStyle={styles.containerViewStyle}>
      <Dropdown
        containerStyle={styles.containerStyle}
        placeholder="All Programs"
        placeholderStyle={styles.placeholderStyle}
        showRightIcon
        onPressRight={navigateToFilterScreen}
      />
      <View style={styles.listView}>
        <AnalyticsSnapshot
          data={traineeManagement?.traineeList}
          showFullCard
          onSelectTitle={title => {
            updateTraineeManagementState('selectSubscribersValue', title);
            onGetGraphData(title, traineeManagement?.selectedValue);
          }}
        />
      </View>
      <FinancialGraph
        title="Active Subscribers"
        chartData={traineeManagement?.chartInformation}
        data={traineeManagement?.graphFilterOptions}
        showDropdown
        placeholder="Last Week"
        value={traineeManagement?.selectedValue}
        setValue={res => {
          updateTraineeManagementState('selectedValue', res);
          onGetGraphData(traineeManagement?.selectSubscribersValue, res);
        }}
        containerStyle={styles.graphContainerStyle}
      />
      <View style={styles.infoView}>
        <Text
          allowFontScaling={false}
          style={styles.expandText}
          onPress={handleExpandAll}>
          {!traineeManagement?.isExpandedAll ? 'Expand All' : 'Collapse All'}
        </Text>
        <FlatList
          data={traineeManagement?.subscriptions}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CollapsibleCard
              title={item?.title}
              description={item?.descriptions}
              isExpandedAll={traineeManagement?.isExpandedAll}
              upArrow={svgIndex.upArrow}
              downArrow={svgIndex.downArrow}
              content={
                <View style={styles.contentView}>
                  <View style={styles.rowView}>
                    <Text allowFontScaling={false} style={styles.title}>
                      Date of Subscription
                    </Text>
                    <Text allowFontScaling={false} style={styles.value}>
                      {item?.dateOfSub}
                    </Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text allowFontScaling={false} style={styles.title}>
                      Duration Left
                    </Text>
                    <Text allowFontScaling={false} style={styles.value}>
                      {item?.leftDuration}
                    </Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text allowFontScaling={false} style={styles.title}>
                      Valid Upto
                    </Text>
                    <Text allowFontScaling={false} style={styles.value}>
                      {item?.validUpto}
                    </Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text allowFontScaling={false} style={styles.title}>
                      Country
                    </Text>
                    <Text allowFontScaling={false} style={styles.value}>
                      {item?.country}
                    </Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text allowFontScaling={false} style={styles.title}>
                      Price paid
                    </Text>
                    <Text allowFontScaling={false} style={styles.value}>
                      {item?.pricePaid}
                    </Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text allowFontScaling={false} style={styles.title}>
                      Device
                    </Text>
                    <Text allowFontScaling={false} style={styles.value}>
                      {item?.device}
                    </Text>
                  </View>
                </View>
              }
            />
          )}
        />
      </View>
    </Container>
  );
};

export default TraineeManagement;
