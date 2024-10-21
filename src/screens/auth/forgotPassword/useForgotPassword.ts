import { useAuthNavigation } from '@hooks/useAppNavigation';
import { checkEmail } from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import { useCallback, useState } from 'react';
import { ForgetPassInfoProps, ForgotPasswordErrorProps } from './ForgotPassword';
import params from '@config/params';
import constant from '@config/constant';
import { Toast } from '@utility/functions/toast';
import { axiosInstance } from '@api/api';
import { Log } from '@utility/log';

const useForgotPassword = () => {
  const navigation = useAuthNavigation();
  let tempError = {};
  const [forgetPassInfo, setForgetPassInfo] = useState<ForgetPassInfoProps>({
    email: '',
    isLoading: false,
  });
  const [forgetPasswordError, setForgetPasswordError] = useState<ForgotPasswordErrorProps>({
    emailError: undefined,
  });

  //** Handle state values */
  const updateForgetPasswordInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setForgetPassInfo(prevState => ({ ...prevState, [key]: value }));
    },
    [forgetPassInfo],
  );

  //** Validate Forgot Passeord */
  const onValidateForgetPassword = useCallback(() => {
    if (!checkEmail(forgetPassInfo?.email)) {
      tempError = {
        emailError: validationMessage.invalidEmail,
      };
    } else {
      tempError = {}
      onContinue();
    }
    setForgetPasswordError(tempError);
  }, [forgetPassInfo, forgetPasswordError]);

  // onPress function to continue after calling the email Exist API
  const onContinue = useCallback(async () => {
    updateForgetPasswordInputValue('isLoading', true);
    const formData = new URLSearchParams();
    formData.append(params?.email, forgetPassInfo?.email?.toLowerCase());
    try {
      const { data } = await axiosInstance.post(
        constant?.emailExist,
        formData.toString(),
      );
      updateForgetPasswordInputValue('isLoading', false);
      if (data?.status == true) {
        navigation.navigate('VerifyOTP', {
          type: 'forgot-password',
          email: forgetPassInfo?.email?.toLowerCase(),
        });
        updateForgetPasswordInputValue('email', '');
      } else {
        tempError = {
          emailError: validationMessage.invalidForgetPassword,
        };
      }
      setForgetPasswordError(tempError);
    } catch (error: any) {
      Log('error ForgetPassword catch:', error?.response?.data);
      updateForgetPasswordInputValue('isLoading', false);
      Toast(error?.response?.data?.message);
    }
  }, [forgetPassInfo]);

  //** Navigate to login screen */
  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return {
    forgetPassInfo,
    forgetPasswordError,
    updateForgetPasswordInputValue,
    onValidateForgetPassword,
    navigateToLogin,
  };
};

export default useForgotPassword;
