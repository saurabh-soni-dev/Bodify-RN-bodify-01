import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useEffect, useState} from 'react';
import {graphFilters} from '../overview/overview.const';
import {AnalyticsFinancialManagementProps} from './AnalyticsFinancialManagement';
import {
  chartInformationList,
  payoutList,
} from './analyticsFinancialManagement.const';
import {useIsFocused} from '@react-navigation/native';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';

const useAnalyticsFinancialManagement = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [analyticsFinancialManagement, setAnalyticsFinancialManagement] =
    useState<AnalyticsFinancialManagementProps>({
      payoutList: payoutList,
      chartInformation: chartInformationList,
      graphFilterOptions: graphFilters,
      selectedValue: 'Last Week',
      payOutValue: '',
    });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (key: string, value: string) => {
      setAnalyticsFinancialManagement(prevState => ({
        ...prevState,
        [key]: value,
      }));
    },
    [analyticsFinancialManagement],
  );

  useEffect(() => {
    // onGetFinancialList();
    // onGetGraphData(
    //   analyticsFinancialManagement?.payOutValue,
    //   analyticsFinancialManagement?.selectedValue,
    // );
  }, [isFocused]);

  //** Handle filter onpress */
  const navigateToFilterScreen = useCallback(() => {
    navigation.navigate('AnalyticsFilters');
  }, []);

  /** Start api call for getting financialManagementList */
  const onGetFinancialList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.financialMngtList}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        handleChangeValue('payoutList', data?.data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for getting financialManagementList */

  /** Start api call for graphFinancialManagementList */
  const onGetGraphData = async (payOutValue: string, selectedValue: string) => {
    Log('selectedValue   ======>>>', selectedValue);
    Log('payOutValue ======>>>', payOutValue);
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.graphFMAnalytics}?filterType=${selectedValue}&type=${payOutValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        handleChangeValue('chartInformation', data);
        Log('getting graph financialManagementList', data);
      }
    } catch (error: any) {
      Log('error graph financialManagementList', error);
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for graphFinancialManagementList */

  return {
    analyticsFinancialManagement,
    handleChangeValue,
    navigateToFilterScreen,
    onGetGraphData,
  };
};
export default useAnalyticsFinancialManagement;
