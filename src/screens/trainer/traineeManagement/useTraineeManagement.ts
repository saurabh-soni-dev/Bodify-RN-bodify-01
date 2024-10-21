import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useEffect, useState} from 'react';
import {TraineeManagementProps} from './TraineeManagement';
import {
  chartInformationList,
  graphFilters,
  subscriptions,
  traineeManagementList,
} from './traineeManagement.const';
import {useIsFocused} from '@react-navigation/native';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';

const useTraineeManagement = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [traineeManagement, setTraineeManagement] =
    useState<TraineeManagementProps>({
      traineeList: traineeManagementList,
      chartInformation: chartInformationList,
      graphFilterOptions: graphFilters,
      subscriptions: subscriptions,
      selectedValue: 'Last Week',
      isExpandedAll: false,
      selectSubscribersValue: '',
    });

  //** Handle state change values */
  const updateTraineeManagementState = useCallback(
    (key: string, value: string | boolean) => {
      setTraineeManagement(prevState => ({...prevState, [key]: value}));
    },
    [traineeManagement],
  );

  useEffect(() => {
    // onGetTraineeList();
    // onGetGraphData(
    //   traineeManagement?.selectSubscribersValue,
    //   traineeManagement?.selectedValue,
    // );
    // onGetExpandList();
  }, [isFocused]);

  //** Handle expand all card */
  const handleExpandAll = useCallback(() => {
    updateTraineeManagementState(
      'isExpandedAll',
      !traineeManagement?.isExpandedAll,
    );
  }, [traineeManagement]);

  //** Handle filter onpress */
  const navigateToFilterScreen = useCallback(() => {
    navigation.navigate('AnalyticsFilters');
  }, []);

  /** Start api call for getting TraineeManagement */
  const onGetTraineeList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.TraineelManagementA}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateTraineeManagementState('traineeList', data?.data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for getting TraineeManagement */

  /** Start api call for graphTraineeManagement */
  const onGetGraphData = async (
    selectSubscribersValue: string,
    selectedValue: string,
  ) => {
    Log('selectedValue   ======>>>', selectedValue);
    Log('selectSubscribersValue ======>>>', selectSubscribersValue);
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.graphTraineeAnalytics}?filterType=${selectedValue}&type=${selectSubscribersValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateTraineeManagementState('chartInformation', data);
        Log('getting graph TraineeManagement', data);
      }
    } catch (error: any) {
      Log('error graph TraineeManagement', error);
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for graphTraineeManagement */

  /** Start api call for getting ExpandList */
  const onGetExpandList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.expandListAnalytics}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateTraineeManagementState('subscriptions', data?.data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for getting ExpandList */

  return {
    traineeManagement,
    updateTraineeManagementState,
    handleExpandAll,
    navigateToFilterScreen,
    onGetGraphData,
  };
};
export default useTraineeManagement;
