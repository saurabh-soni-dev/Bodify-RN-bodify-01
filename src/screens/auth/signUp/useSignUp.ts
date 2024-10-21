import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';
import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {setField} from '@redux/userReducer/reducer';
import {Toast} from '@utility/functions/toast';
import {checkEmail} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useEffect, useState} from 'react';
import {UserSignUpErrorProps, UserSignUpProps} from './SignUp';

const useSignUp = () => {
  const dispatch = useAppDispatch();
  const navigation = useAuthNavigation();
  const {fields, step} = useAppSelector((state: RootState) => state?.UserData);
  const [userSignUp, setUserSignUp] = useState<UserSignUpProps>({
    email: '',
    isLoading: false,
  });
  const [signupError, setSignupError] = useState<UserSignUpErrorProps>({
    emailError: undefined,
  });

  //** Handle state values */
  const updateSignupInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setUserSignUp(prevState => ({...prevState, [key]: value}));
    },
    [userSignUp],
  );

  useEffect(() => {
    if (fields) {
      updateSignupInputValue('email', fields?.email);
    }
  }, []);

  //** Validate email already exist or not */
  const onValidateSignUp = useCallback(() => {
    let tempError = {};
    if (!checkEmail(userSignUp?.email)) {
      tempError = {
        emailError: validationMessage.invalidEmail,
      };
    } else {
      tempError = {};
      onCheckEmailExist();
    }
    setSignupError(tempError);
  }, [userSignUp, signupError]);

  //** Api call for Check email already exist or not */
  const onCheckEmailExist = useCallback(async () => {
    updateSignupInputValue('isLoading', true);
    const formData = new URLSearchParams();
    formData.append(params?.email, userSignUp?.email);
    try {
      const {data} = await axiosInstance.post(
        constant?.emailExist,
        formData.toString(),
      );
      updateSignupInputValue('isLoading', false);
      if (data?.status == true) {
        signupError.emailError = data?.message;
        setSignupError({...signupError});
      } else {
        signupError.emailError = undefined;
        setSignupError({...signupError});
        dispatch(setField({key: 'email', value: userSignUp?.email}));
        navigation.navigate('VerifyOTP', {
          type: 'signup',
        });
      }
    } catch (error: any) {
      updateSignupInputValue('isLoading', false);
      Toast(error?.response?.data?.message);
    }
  }, [userSignUp]);

  //** Navigate to login screen */
  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return {
    userSignUp,
    signupError,
    updateSignupInputValue,
    onValidateSignUp,
    navigateToLogin,
  };
};

export default useSignUp;
