import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';
import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useAppDispatch} from '@hooks/useRedux';
import {loginSuccess} from '@redux/userReducer/reducer';
import {Toast} from '@utility/functions/toast';
import {checkEmail, checkPswd} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useMemo, useState} from 'react';
import {UserLoginErrorProps, UserLoginProps} from './Login';

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigation = useAuthNavigation();
  const [userLogin, setUserLogin] = useState<UserLoginProps>({
    email: '',
    password: '',
    isLoading: false,
  });
  const [userLoginError, setUserLoginError] = useState<UserLoginErrorProps>({
    emailError: undefined,
    passwordError: undefined,
  });

  //** Update state values */
  const updateLoginInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setUserLogin(prevState => ({...prevState, [key]: value}));
    },
    [userLogin],
  );

  //** Handle login button */
  const isLogin = useMemo(
    () => !userLogin?.email || !userLogin?.password,
    [userLogin],
  );

  //** Validate login */
  const onValidateLogin = useCallback(() => {
    let tempError = {};
    if (!checkEmail(userLogin?.email)) {
      tempError = {
        emailError: validationMessage.invalidEmail,
      };
    } else if (!checkPswd(userLogin?.password)) {
      tempError = {
        passwordError: validationMessage.invalidPassword,
      };
    } else {
      tempError = {};
      onLoginSubmit();
    }
    setUserLoginError(tempError);
  }, [userLogin, userLoginError]);

  //** Call Login Api */
  const onLoginSubmit = useCallback(async () => {
    updateLoginInputValue('isLoading', true);
    const formData = new URLSearchParams();
    formData.append(params?.email, userLogin?.email);
    formData.append(params?.password, userLogin?.password);
    try {
      const {data, headers} = await axiosInstance.post(
        constant?.login,
        formData.toString(),
      );
      const tempRefreshToken = headers?.['set-cookie']
        ?.find(cookie => cookie?.includes('refreshToken'))
        ?.split(';')[0]
        .split('=');
      const tempAccessToken = headers?.['set-cookie']
        ?.find(cookie => cookie?.includes('accessToken'))
        ?.split(';')[1]
        .split('=');

      let userData = {
        accessToken: tempAccessToken?.[2],
        refreshToken: tempRefreshToken?.[1],
        typeUser: data?.typeUser,
      };
      updateLoginInputValue('isLoading', false);
      if (data) {
        Toast(data?.message);
        dispatch(loginSuccess(userData));
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeBottomTabs'}],
        });
        updateLoginInputValue('email', '');
        updateLoginInputValue('password', '');
      }
    } catch (error: any) {
      updateLoginInputValue('isLoading', false);
      Toast(error?.response?.data?.message);
    }
  }, [userLogin]);

  //** Navigate to forgot password screen */
  const navigateToForgotPassword = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, []);

  //** Navigate to signup screen */
  const navigateToSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);

  return {
    userLogin,
    userLoginError,
    updateLoginInputValue,
    isLogin,
    onValidateLogin,
    navigateToForgotPassword,
    navigateToSignUp,
  };
};

export default useLogin;
