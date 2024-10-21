import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useAppDispatch } from '@hooks/useRedux';
import { logoutSucces } from '@redux/userReducer/reducer';
import { Log } from '@utility/log';
import { useCallback, useState } from 'react';
import { SettingsProps } from './Settings';
import { settingsList } from './settings.conts';

const useSettings = () => {
  const dispatch = useAppDispatch();
  const navigation = useAuthNavigation();
  const [settingsInfo, setSettingsInfo] = useState<SettingsProps>({
    settings: settingsList,
    deleteModal: false,
    logoutModal: false,
  });

  //** Handle state values */
  const updateSettingsState = useCallback(
    (key: string, value: boolean) => {
      setSettingsInfo(prevState => ({...prevState, [key]: value}));
    },
    [settingsInfo],
  );

  //**Handle Delete and Logout modal */
  const handleModal = useCallback(
    (index: number) => {
      switch (index) {
        case 1:
          updateSettingsState(
            'deleteModal',
            !settingsInfo?.deleteModal,
          );
          break;
        case 2:
          try {
            setTimeout(() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Splash'}],
              });
            }, 0);
            dispatch(logoutSucces());
            updateSettingsState(
              'logoutModal',
              !settingsInfo?.logoutModal,
            );
          } catch (error) {
            Log('error::', error);
          }
          break;
        default:
          updateSettingsState('deleteModal', false);
          updateSettingsState('logoutModal', false);
          break;
      }
    },
    [settingsInfo],
  );

  //** Navigate to settings details screen */
  const handleNavigation = useCallback(
    (id: number) => {
      switch (id) {
        case 6:
          updateSettingsState(
            'logoutModal',
            !settingsInfo?.logoutModal,
          );
          break;
        case 7:
          updateSettingsState(
            'deleteModal',
            !settingsInfo?.deleteModal,
          );
          break;
        default:
          break;
      }
    },
    [settingsInfo],
  );

  return {
    settingsInfo,
    handleModal,
    handleNavigation,
  };
};

export default useSettings;
