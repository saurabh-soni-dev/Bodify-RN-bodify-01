import {useAuthNavigation} from '@hooks/useAppNavigation';
import svgIndex from '@svgIndex';
import {useCallback, useEffect, useRef, useState} from 'react';
import {AnalyticsReferralManagementProps} from './AnalyticsReferralManagement';
import {
  bottomSheetList,
  referralManagementList,
} from './analyticsReferralManagement.const';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {useIsFocused} from '@react-navigation/native';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';
import params from '@config/params';

const useAnalyticsReferralManagement = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const refRBSheet = useRef<any>([]);
  const [referralInfo, setReferralInfo] =
    useState<AnalyticsReferralManagementProps>({
      referralList: referralManagementList,
      filterReferralList: referralManagementList,
      bottomSheetList: bottomSheetList,
      searchItem: '',
      activateReferral: false,
      selectItemId: '',
    });

  //** Update referral state */
  const updateReferralState = useCallback(
    (key: string, value: string | Array<object> | boolean | number) => {
      setReferralInfo(prevState => ({...prevState, [key]: value}));
    },
    [referralInfo],
  );
  useEffect(() => {
    // onGetReferralList();
  }, [isFocused]);

  //** Open the operation bottom sheet */
  const openMenuSheet = useCallback(
    (index: number, id: number) => {
      updateReferralState('selectItemId', id);
      refRBSheet.current[index]?.open();
    },
    [refRBSheet],
  );
  //** close the operation bottom sheet */
  const closeMenuSheet = useCallback(
    (index: number) => {
      refRBSheet.current[index]?.close();
    },
    [refRBSheet],
  );

  //** Navigate to filter screen */
  const navigateToFilterScreen = useCallback(() => {
    navigation.navigate('AnalyticsFilters');
  }, []);

  //** Handle referral item search */
  const onSearchReferral = useCallback(
    (text: string) => {
      updateReferralState('searchItem', text);
      const filteredList = referralInfo?.filterReferralList?.filter(item => {
        return (
          item?.referralCode?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.referredBy?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.discount?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.noOfSubs?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.conversionRate?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.revenueGenerated?.toLowerCase()?.includes(text?.toLowerCase())
        );
      });
      updateReferralState('referralList', filteredList);
    },
    [referralInfo, referralManagementList],
  );

  // handle bottom sheet operations
  const handleSheetOperations = useCallback(
    (id: number, index: number) => {
      if (id === 1) return;

      if (id === 2) {
        const updatedBottomSheetList = (
          referralInfo?.bottomSheetList || []
        ).map(item =>
          item?.id === id
            ? {
                ...item,
                title: item.title === 'Activate' ? 'Deactivate' : 'Activate',
                icon:
                  item.title === 'Activate'
                    ? svgIndex.deactivate
                    : svgIndex.activate,
              }
            : item,
        );
        onReferralDeactivate(updatedBottomSheetList[1]?.title);
        updateReferralState('bottomSheetList', updatedBottomSheetList);
        updateReferralState(
          'activateReferral',
          !referralInfo?.activateReferral,
        );
      }
      if (id === 3) {
        onReferralDelete();
      }
    },
    [referralInfo, updateReferralState],
  );

  /** Start api call for getting referralManagementList */
  const onGetReferralList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.referralManagementList}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateReferralState('referralList', data);
        updateReferralState('filterReferralList', data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for getting referralManagementList */

  /** Start api call for referral Delete */
  const onReferralDelete = async () => {
    try {
      const {data} = await axiosInstance.delete(
        `${constant?.baseURL}${constant?.referralDeleteAnalytics}${referralInfo?.selectItemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        onGetReferralList();
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for referral Delete */

  /** Start api call for referral Deactivate */
  const onReferralDeactivate = async (type: string) => {
    const formData = new URLSearchParams();
    formData.append(params?.type, type);
    formData.append(params?.id, referralInfo?.selectItemId);
    try {
      const {data} = await axiosInstance.put(
        constant?.referralDeactivateAnlyt,
        formData.toString(),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        Log('on Referral Deactivate api :-', data);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.message);
    }
  };
  /** end api call for referral Deactivate */

  return {
    referralInfo,
    refRBSheet,
    openMenuSheet,
    navigateToFilterScreen,
    onSearchReferral,
    handleSheetOperations,
  };
};

export default useAnalyticsReferralManagement;
