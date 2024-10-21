import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {incrementStep, setField} from '@redux/userReducer/reducer';
import {checkPswd, checkString} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import moment from 'moment';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {AccountInfoProps, CreateAccountErrorProps} from './CreateAccount';

const useCreateAccount = () => {
  const navigation = useAuthNavigation();
  const dispatch = useDispatch();
  const {fields, step} = useAppSelector((state: RootState) => state?.UserData);
  const inputRef = useRef<TextInput>(null);
  const [accountInfo, setAccountInfo] = useState<AccountInfoProps>({
    isAccept: false,
    dateOfBirth: '',
    firstName: '',
    lastName: '',
    password: '',
    visibleDatePicker: false,
    isLoading: false,
  });
  const [createAccountError, setCreateAccountError] =
    useState<CreateAccountErrorProps>({
      firstNameError: undefined,
      lastNameError: undefined,
      passwordError: undefined,
      dateOfBirthError: undefined,
    });
  const currentDate = moment();
  const diffYears = currentDate.diff(accountInfo?.dateOfBirth, 'years');

  //** Handle state values */
  const updateCreateAccountInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setAccountInfo(prevState => ({...prevState, [key]: value}));
    },
    [accountInfo],
  );

  useEffect(() => {
    if (fields) {
      updateCreateAccountInputValue('firstName', fields?.firstName);
      updateCreateAccountInputValue('lastName', fields?.lastName);
      updateCreateAccountInputValue('password', fields?.password);
      updateCreateAccountInputValue('dateOfBirth', fields?.dateOfBirth);
      updateCreateAccountInputValue('isAccept', fields?.privacyPolicy);
    }
  }, []);

  //** Handle submit button isDisabled & isActive*/
  const isContinue = useMemo(
    () =>
      !accountInfo?.firstName ||
      !accountInfo?.lastName ||
      !accountInfo?.password ||
      !accountInfo?.isAccept ||
      !accountInfo?.dateOfBirth,
    [accountInfo],
  );

  //** Open date picker */
  const onOpenDatePicker = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      updateCreateAccountInputValue(
        'visibleDatePicker',
        !accountInfo?.visibleDatePicker,
      );
    }, 500);
  };

  //** Close date picker */
  const onCloseDatePicker = () => {
    updateCreateAccountInputValue(
      'visibleDatePicker',
      !accountInfo?.visibleDatePicker,
    );
  };

  //** Check Privacy policy */
  const onCheckPrivacyPolicy = useCallback(() => {
    updateCreateAccountInputValue('isAccept', !accountInfo?.isAccept);
  }, [accountInfo]);

  //** Select Date of birth */
  const onSelectDateOfBirth = useCallback(
    (dateString: string) => {
      if (inputRef.current) {
        setTimeout(() => {
          inputRef?.current?.blur();
        }, 500);
      }
      updateCreateAccountInputValue('dateOfBirth', dateString);
      onCloseDatePicker();
    },
    [accountInfo],
  );

  //** Validate create new account */
  const onValidateCreateAccount = useCallback(() => {
    let tempError = {};
    if (!checkString(accountInfo?.firstName)) {
      tempError = {
        firstNameError: validationMessage.invalidFirstName,
      };
    } else if (!checkString(accountInfo?.lastName)) {
      tempError = {
        lastNameError: validationMessage.invalidLastName,
      };
    } else if (!checkPswd(accountInfo?.password)) {
      tempError = {
        passwordError: validationMessage.invalidPassword,
      };
    } else if (diffYears <= 18) {
      tempError = {
        dateOfBirthError: validationMessage.invalidDateOfBirth,
      };
    } else {
      tempError = {};
      onPressContinue();
    }
    setCreateAccountError(tempError);
  }, [accountInfo, createAccountError, diffYears]);

  //** Submit create account info */
  const onPressContinue = useCallback(() => {
    updateCreateAccountInputValue('isLoading', true);
    dispatch(setField({key: 'firstName', value: accountInfo?.firstName}));
    dispatch(setField({key: 'lastName', value: accountInfo?.lastName}));
    dispatch(setField({key: 'password', value: accountInfo?.password}));
    dispatch(setField({key: 'dateOfBirth', value: accountInfo?.dateOfBirth}));
    dispatch(
      setField({
        key: 'privacyPolicy',
        value: accountInfo?.isAccept?.toString(),
      }),
    );
    dispatch(incrementStep(2));
    setTimeout(() => {
      updateCreateAccountInputValue('isLoading', false);
      navigation.navigate('AccountType');
    }, 3000);
  }, [accountInfo]);

  //** Navigate to back screen */
  const onClickBack = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);

  return {
    inputRef,
    accountInfo,
    setAccountInfo,
    createAccountError,
    updateCreateAccountInputValue,
    isContinue,
    onOpenDatePicker,
    onCloseDatePicker,
    onSelectDateOfBirth,
    onCheckPrivacyPolicy,
    onValidateCreateAccount,
    onClickBack,
  };
};

export default useCreateAccount;
