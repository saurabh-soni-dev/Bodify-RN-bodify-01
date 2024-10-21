import {UserManagementCard} from '@card';
import {
  AnalyticsSnapshot,
  Container,
  Dropdown,
  EmptyContainer,
  FinancialGraph,
} from '@components';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import useUserManagement from './useUserEngagement';
import {styles} from './userEngagement.style';

export interface UserEngagementProps {
  userOverview: UserOverviewItemProps[];
  chartInformation: ChartInformationProps[];
  graphFilterOptions: graphFilterOptionsProps[];
  userData: userDataProps[];
  selectedValue: string;
  selectSessionValue: string;
}
interface UserOverviewItemProps {
  id: number;
  title?: string;
  amount?: string;
  description?: string;
  progress?: string;
  type?: string;
}
interface ChartInformationProps {
  value: number;
  date?: string;
}
interface graphFilterOptionsProps {
  id: number;
  title: string;
}
interface userDataProps {
  id: number;
  referralCode?: string;
  noOfSubs?: string;
  conversionRate?: string;
  revenueGenerated?: string;
  discount?: string;
}

const UserEngagement: FC = () => {
  const {
    userEngagementState,
    updateUserEngagementState,
    navigateToFilterScreen,
    onGetGraphData,
  } = useUserManagement();
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
          data={userEngagementState?.userOverview}
          onSelectTitle={title => {
            updateUserEngagementState('selectSessionValue', title);
            onGetGraphData(title, userEngagementState?.selectedValue);
          }}
        />
      </View>
      <FinancialGraph
        title="workout session (Average)"
        chartData={userEngagementState?.chartInformation}
        data={userEngagementState?.graphFilterOptions}
        showDropdown
        placeholder="Last Week"
        value={userEngagementState?.selectedValue}
        setValue={res => {
          updateUserEngagementState('selectedValue', res);
          onGetGraphData(userEngagementState?.selectSessionValue, res);
        }}
        containerStyle={styles.graphContainerStyle}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={userEngagementState?.userData}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <UserManagementCard key={index} item={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyContainer />}
        />
      </View>
    </Container>
  );
};

export default UserEngagement;
