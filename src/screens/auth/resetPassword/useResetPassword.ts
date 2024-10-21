import { useAuthNavigation, useAuthRoute } from '@hooks/useAppNavigation';
import { checkPswd } from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import { useCallback, useMemo, useState } from 'react';
import { PasswordInfoErrorProps, PasswordInfoProps } from './ResetPassword';
import { Toast } from '@utility/functions/toast';
import constant from '@config/constant';
import { axiosInstance } from '@api/api';
import params from '@config/params';

const useResetPassword = () => {
  const navigation = useAuthNavigation();
  const paramsRoute = useAuthRoute('ResetPassword')
  const [passwordInfo, setPasswordInfo] = useState<PasswordInfoProps>({
    newPassword: '',
    confirmPassword: '',
    isLoading: false,
  });
  const [resetPasswordError, setResetPasswordError] =
    useState<PasswordInfoErrorProps>({
      newPasswordError: undefined,
      confirmPasswordError: undefined,
    });

  //** Handle state values */
  const updateResetPasswordInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setPasswordInfo(prevState => ({ ...prevState, [key]: value }));
    },
    [passwordInfo],
  );

  //** Handle reset password button */
  const isResetPassword = useMemo(
    () => !passwordInfo?.newPassword || !passwordInfo?.confirmPassword,
    [passwordInfo],
  );

  //** Navigate to login screen */
  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login');
    updateResetPasswordInputValue('newPassword', '');
    updateResetPasswordInputValue('confirmPassword', '');
  }, []);

  //** Validate reset password */
  const onValidateResetPassword = useCallback(() => {
    let tempError = {};
    if (!checkPswd(passwordInfo?.newPassword)) {
      tempError = {
        newPasswordError: validationMessage.invalidNewPass,
      };
    } else if (passwordInfo?.newPassword !== passwordInfo?.confirmPassword) {
      tempError = {
        confirmPasswordError: validationMessage.invalidConfirmPass,
      };
    } else {
      tempError = {};
      onSubmitResetPassword();
    }
    setResetPasswordError(tempError);
  }, [passwordInfo, resetPasswordError]);

  // function to reset password after calling the Forget Password API
  const onSubmitResetPassword = useCallback(async () => {
    updateResetPasswordInputValue('isLoading', true);
    const formData = new URLSearchParams();
    formData.append(params?.email, String(paramsRoute?.params?.emailPass));
    formData.append(params?.password, passwordInfo?.confirmPassword);
    try {
      const { data } = await axiosInstance.put(
        constant?.forget,
        formData.toString(),
      );
      updateResetPasswordInputValue('isLoading', false);
      if (data) {
        Toast(data?.message);
        updateResetPasswordInputValue('newPassword', '');
        updateResetPasswordInputValue('confirmPassword', '');
        navigation.navigate('Login');
      }
    } catch (error: any) {
      updateResetPasswordInputValue('isLoading', false);
      Toast(error?.response?.data?.message);
    }

  }, [passwordInfo]);

  return {
    passwordInfo,
    resetPasswordError,
    isResetPassword,
    updateResetPasswordInputValue,
    onValidateResetPassword,
    navigateToLogin,
  };
};

export default useResetPassword;
