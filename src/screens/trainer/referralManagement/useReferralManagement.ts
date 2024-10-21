import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useEffect, useState} from 'react';
import {ReferralManagementProps} from './ReferralManagement';
import {referralManagementList} from './referralManagement.const';

const useReferralManagement = () => {
  const navigation = useAuthNavigation();
  const [referralInfo, setReferralInfo] = useState<ReferralManagementProps>({
    referralList: [],
    filterReferralList: referralManagementList,
    searchItem: '',
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateReferralInfo('referralList', referralManagementList);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  //** Update referral info */
  const updateReferralInfo = useCallback(
    (key: string, value: string | Array<object>) => {
      setReferralInfo(prevState => ({...prevState, [key]: value}));
    },
    [referralInfo],
  );

  //** Navigate to create new referral code screen */
  const navigateToCreateReferralCode = useCallback(() => {
    navigation?.navigate('CreateReferralCode');
  }, [navigation]);

  //** Handle referral item search */
  const onSearchReferral = useCallback(
    (text: string) => {
      updateReferralInfo('searchItem', text);
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
      updateReferralInfo('referralList', filteredList);
    },
    [referralInfo],
  );

  return {
    referralInfo,
    updateReferralInfo,
    navigateToCreateReferralCode,
    onSearchReferral,
  };
};

export default useReferralManagement;
