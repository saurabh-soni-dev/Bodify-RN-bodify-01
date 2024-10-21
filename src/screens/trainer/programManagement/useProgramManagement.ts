import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useEffect, useState} from 'react';
import {ProgramManagementProps} from './ProgramManagement';
import {
  chartInformationList,
  graphFilters,
  programManagementOverview,
} from './programManagement.const';
import constant from '@config/constant';
import {axiosInstance} from '@api/api';
import {useIsFocused} from '@react-navigation/native';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';

const useProgramManagement = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [programManagement, setProgramManagement] =
    useState<ProgramManagementProps>({
      programOverviewList: programManagementOverview,
      chartInformation: chartInformationList,
      graphFilterOptions: graphFilters,
      selectedValue: 'Last Week',
      selectedEarnValue: '',
    });

  //** Handle state change values */
  const updateProgramManagementState = useCallback(
    (key: string, value: string | boolean) => {
      setProgramManagement(prevState => ({...prevState, [key]: value}));
    },
    [programManagement],
  );

  useEffect(() => {
    // onGetProgramList();
    // onGetGraphData(
    //   programManagement?.selectedEarnValue,
    //   programManagement?.selectedValue,
    // );
  }, [isFocused]);

  //** Handle filter onpress */
  const navigateToFilterScreen = useCallback(() => {
    navigation.navigate('AnalyticsFilters');
  }, []);

  /** Start api call for getting programManagementList */
  const onGetProgramList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.programManagementList}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateProgramManagementState('programOverviewList', data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for getting programManagementList */

  /** Start api call for graphProgramMgt */
  const onGetGraphData = async (
    selectedEarnValue: string,
    selectedValue: string,
  ) => {
    Log('selectedValue   ======>>>', selectedValue);
    Log('selectedEarnValue ======>>>', selectedEarnValue);
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.graphProgramM}?filterType=${selectedValue}&type=${selectedEarnValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateProgramManagementState('chartInformation', data);
        Log('getting graph programManagementList', data);
      }
    } catch (error: any) {
      Log('error graph programManagementList', error);
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for graphProgramMgt */

  return {
    programManagement,
    updateProgramManagementState,
    navigateToFilterScreen,
    onGetGraphData,
  };
};

export default useProgramManagement;
