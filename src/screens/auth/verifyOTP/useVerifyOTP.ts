import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {incrementStep, setField} from '@redux/userReducer/reducer';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';

const useVerifyOTP = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('VerifyOTP');
  const dispatch = useAppDispatch();
  const {fields, step} = useAppSelector((state: RootState) => state?.UserData);
  const OTPRef = useRef<TextInput>(null);
  const [otp, setOtp] = useState<string>('');
  const [verifyOtpError, setVerifyOtpError] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (fields) {
      setOtp(fields?.otp);
    }
  }, []);

  //** Handle otp value */
  const updateVerifyOtpInputValue = useCallback(
    (value: string) => {
      setOtp(value);
      value?.length === 4 && Keyboard.dismiss();
    },
    [otp],
  );

  //** Handle keyboard down on enter otp */
  const onSubmitEditing = useCallback(() => {
    Keyboard.dismiss();
  }, [otp]);

  //**  Validate otp verification */
  const onValidateVerifyOTP = useCallback(() => {
    if (otp?.length !== 4 || otp == '0000') {
      setVerifyOtpError(validationMessage.invalidOtp);
    } else {
      setVerifyOtpError(undefined);
      onVerifyOTP();
    }
  }, [otp, params]);

  //** Submit verifyOtp */
  const onVerifyOTP = useCallback(() => {
    if (params?.type === 'signup') {
      dispatch(setField({key: 'otp', value: otp?.toString()}));
      dispatch(incrementStep(1));
      navigation.navigate('CreateAccount');
    } else {
      navigation.navigate('ResetPassword', {
        emailPass: params?.email,
      });
    }
  }, []);

  //** Navigate to login screen onpress login text */
  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return {
    otp,
    OTPRef,
    verifyOtpError,
    updateVerifyOtpInputValue,
    onSubmitEditing,
    onValidateVerifyOTP,
    navigateToLogin,
  };
};

export default useVerifyOTP;
