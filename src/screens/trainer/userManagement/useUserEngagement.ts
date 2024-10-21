import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useEffect, useState} from 'react';
import {
  chartInformationList,
  graphFilters,
  userManagementList,
  userOverviewList,
} from './userEngagement.const';
import {UserEngagementProps} from './UserEngagement';
import {useIsFocused} from '@react-navigation/native';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';

const useUserEngagement = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [userEngagementState, setUserEngagementState] =
    useState<UserEngagementProps>({
      userOverview: userOverviewList,
      chartInformation: chartInformationList,
      graphFilterOptions: graphFilters,
      userData: userManagementList,
      selectedValue: 'Last Week',
      selectSessionValue: '',
    });

  //** Update use management state */
  const updateUserEngagementState = useCallback(
    (key: string, value: string | boolean) => {
      setUserEngagementState(prevState => ({...prevState, [key]: value}));
    },
    [userEngagementState],
  );

  useEffect(() => {
    // onGetEngagementList();
    // onGetGraphData(
    //   userEngagementState?.selectSessionValue,
    //   userEngagementState?.selectedValue,
    // );
    // onGetUserList();
  }, [isFocused]);

  //** Navigate to filter screen */
  const navigateToFilterScreen = useCallback(() => {
    navigation.navigate('AnalyticsFilters');
  }, []);

  /** Start api call for getting userEngagement */
  const onGetEngagementList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.engagementAnalytics}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateUserEngagementState('userOverview', data?.data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for getting userEngagement */

  /** Start api call for graphUserEngagement */
  const onGetGraphData = async (
    selectSessionValue: string,
    selectedValue: string,
  ) => {
    Log('selectedValue   ======>>>', selectedValue);
    Log('selectSessionValue ======>>>', selectSessionValue);
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.graphEngagement}?filterType=${selectedValue}&type=${selectSessionValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateUserEngagementState('chartInformation', data?.data);
        Log('getting graph userEngagement', data);
      }
    } catch (error: any) {
      Log('error graph userEngagement', error);
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for graphUserEngagement */

  /** Start api call for getting userList */
  const onGetUserList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.UserDataList}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateUserEngagementState('userData', data?.data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for getting userList */

  return {
    userEngagementState,
    updateUserEngagementState,
    navigateToFilterScreen,
    onGetGraphData,
  };
};
export default useUserEngagement;
