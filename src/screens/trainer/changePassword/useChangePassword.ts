import {useAuthNavigation} from '@hooks/useAppNavigation';
import {checkPswd} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useMemo, useState} from 'react';
import {ChangePasswordProps, PasswordChangeErrorProps} from './ChangePassword';
import params from '@config/params';
import constant from '@config/constant';
import {axiosInstance} from '@api/api';
import {Toast} from '@utility/functions/toast';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {Log} from '@utility/log';

const useChangePassword = () => {
  const navigation = useAuthNavigation();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [passwordChange, setPasswordChange] = useState<ChangePasswordProps>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    confirmationModal: false,
    isLoading: false,
  });

  const [passwordChangeError, setPasswordChangeError] =
    useState<PasswordChangeErrorProps>({
      oldPasswordError: undefined,
      newPasswordError: undefined,
      confirmPasswordError: undefined,
    });

  //** Handle state change */
  const updatePasswordChange = useCallback(
    (key: string, value: string | boolean) => {
      setPasswordChange(prevState => ({...prevState, [key]: value}));
    },
    [passwordChange],
  );

  //** Email change confirmations modal handler */
  const handleModal = useCallback(() => {
    updatePasswordChange(
      'confirmationModal',
      !passwordChange?.confirmationModal,
    );
  }, [passwordChange]);

  //* Validate Edit Profile /
  const onValidateSaveChanges = useCallback(() => {
    let tempError = {};
    if (!checkPswd(passwordChange?.oldPassword)) {
      tempError = {
        oldPasswordError: validationMessage.invalidOldPassword,
      };
    } else if (!checkPswd(passwordChange?.newPassword)) {
      tempError = {
        newPasswordError: validationMessage.invalidNewPass,
      };
    } else if (
      passwordChange?.newPassword !== passwordChange?.confirmPassword
    ) {
      tempError = {
        confirmPasswordError: validationMessage.invalidConfirmPass,
      };
    } else {
      tempError = {};
      onChangePasswordApi();
    }
    setPasswordChangeError(tempError);
  }, [passwordChange, passwordChangeError, validationMessage]);

  //** start final api call changePassword */
  const onChangePasswordApi = useCallback(async () => {
    updatePasswordChange('isLoading', true);
    const formData = new URLSearchParams();
    formData.append(params?.email, '');
    formData.append(params?.oldPassword, passwordChange?.oldPassword);
    formData.append(params?.newPassword, passwordChange?.newPassword);
    formData.append(params?.reptPassword, passwordChange?.confirmPassword);
    try {
      const {data} = await axiosInstance.put(
        constant?.changePassword,
        formData.toString(),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      updatePasswordChange('isLoading', false);
      if (data) {
        Log('change password data api :-', data);
        Toast(data?.message);
        updatePasswordChange('oldPassword', '');
        updatePasswordChange('newPassword', '');
        updatePasswordChange('confirmPassword', '');
        navigation.goBack();
      }
    } catch (error: any) {
      updatePasswordChange('isLoading', false);
      Toast(error?.response?.data?.message);
      Log('error===:', error);
    }
  }, [passwordChange]);
  //** end final api call changePassword */

  //** Handle save changes button isDisabled & isActive*/
  const isSave = useMemo(
    () =>
      !passwordChange?.oldPassword ||
      !passwordChange?.newPassword ||
      !passwordChange?.confirmPassword,
    [passwordChange],
  );

  return {
    passwordChange,
    updatePasswordChange,
    handleModal,
    onValidateSaveChanges,
    passwordChangeError,
    isSave,
  };
};

export default useChangePassword;
