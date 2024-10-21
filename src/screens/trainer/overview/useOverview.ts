import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useEffect, useState} from 'react';
import {OverviewProps} from './Overview';
import {
  analyticsOverviewList,
  chartInformationList,
  graphFilters,
} from './overview.const';
import {useIsFocused} from '@react-navigation/native';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';

const useOverview = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [overviewInfo, setOverviewInfo] = useState<OverviewProps>({
    overviewList: analyticsOverviewList,
    chartInformation: chartInformationList,
    graphFilterOptions: graphFilters,
    selectedValue: 'Last Week',
    overSelectValue: '',
  });

  //** Update overview state */
  const updateOverviewState = useCallback(
    <T>(key: string, value: T) => {
      setOverviewInfo(prevState => ({...prevState, [key]: value}));
    },
    [overviewInfo],
  );

  useEffect(() => {
    // onGetSubscribers();
    // onGetGraphData(overviewInfo?.overSelectValue, overviewInfo?.selectedValue);
  }, [isFocused]);

  //** Handle filter onpress */
  const navigateToFilterScreen = useCallback(() => {
    navigation.navigate('AnalyticsFilters');
  }, []);

  /** Start api call for getting overviewList */
  const onGetSubscribers = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.overViewList}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateOverviewState('overviewList', data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for getting overviewList */

  /** Start api call for graphOverView */
  const onGetGraphData = async (
    overSelectValue: string,
    selectedValue: string,
  ) => {
    Log('selectedValue   ======>>>', selectedValue);
    Log('overviewList ======>>>', overSelectValue);
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.graphOverView}?filterType=${selectedValue}&type=${overSelectValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateOverviewState('chartInformation', data);
        Log('getting graph overView', data);
      }
    } catch (error: any) {
      Log('error graph overView', error);
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for graphOverView */

  return {
    overviewInfo,
    updateOverviewState,
    navigateToFilterScreen,
    onGetGraphData,
  };
};

export default useOverview;
