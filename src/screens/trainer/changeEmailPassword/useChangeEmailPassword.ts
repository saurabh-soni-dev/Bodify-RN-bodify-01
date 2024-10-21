import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';
import {UserInfoProps} from './ChangeEmailPassword';

const useChangeEmailPassword = () => {
  const navigation = useAuthNavigation();
  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    email: 'Orrdulev123@gmail.com',
    password: '*******',
  });

  //** Navigate to change email screen */
  const navigateToChange = useCallback(
    (screenName?: string) => {
      if (screenName == 'email') {
        navigation.navigate('ChangeEmail');
      } else {
        navigation.navigate('ChangePassword');
      }
    },
    [userInfo],
  );

  return {
    userInfo,
    navigateToChange,
  };
};

export default useChangeEmailPassword;
