import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useMemo, useState} from 'react';
import {emailChangeErrorProps, emailChangeProps} from './ChangeEmail';
import {checkEmail, checkNumeric} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';

const useChangeEmail = () => {
  const navigation = useAuthNavigation();
  const [emailChange, setEmailChange] = useState<emailChangeProps>({
    currentEmail: '',
    email: '',
    verificationCode: '',
    changeStep: 0,
    confirmationModal: false,
  });
  const [emailChangeError, setEmailChangeError] =
    useState<emailChangeErrorProps>({
      emailError: undefined,
      verificationCodeError: undefined,
      currentEmailError: undefined,
    });

  //** Handle state change */
  const updateEmailChange = useCallback(
    (key: string, value: string | boolean | number) => {
      setEmailChange(prevState => ({...prevState, [key]: value}));
    },
    [emailChange],
  );

  //** Handle next button isDisabled & isActive */
  const isNext = useMemo(
    () =>
      emailChange?.changeStep == 0
        ? !emailChange?.verificationCode || !emailChange?.currentEmail
        : !emailChange?.email || !emailChange?.verificationCode,
    [emailChange],
  );

  //** Validate changeEmail */
  const onValidationNext = useCallback(() => {
    let tempError = {};
    if (!checkEmail(emailChange?.currentEmail)) {
      tempError = {
        currentEmailError: validationMessage.invalidEmail,
      };
    } else if (!checkNumeric(emailChange?.verificationCode)) {
      tempError = {
        verificationCodeError: validationMessage.invalidOtp,
      };
    } else if (emailChange?.changeStep > 2) {
      if (!checkNumeric(emailChange?.email)) {
        tempError = {
          emailError: validationMessage.invalidEmail,
        };
      }
    } else {
      tempError = {};
      onPressNext();
    }
    setEmailChangeError(tempError);
  }, [validationMessage, emailChangeError, emailChange]);
  //** Navigate to change email screen */
  const onPressNext = useCallback(() => {
    setEmailChange(prevState => ({
      ...prevState,
      changeStep: prevState.changeStep + 1,
    }));
    // navigation.navigate('ChangeEmail');
  }, [emailChange?.changeStep]);

  //** Confirmations modal */
  const handleModal = useCallback(() => {
    updateEmailChange('confirmationModal', !emailChange?.confirmationModal);
  }, [emailChange]);

  return {
    emailChange,
    updateEmailChange,
    isNext,
    onPressNext,
    handleModal,
    onValidationNext,
    emailChangeError,
  };
};

export default useChangeEmail;
