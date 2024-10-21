import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';
import {useAuthNavigation} from '@hooks/useAppNavigation';
import {RootState} from '@redux/store';
import {
  fieldsClearSuccess,
  incrementStep,
  setField,
  signUpSuccess,
} from '@redux/userReducer/reducer';
import {Toast} from '@utility/functions/toast';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useAccountType = () => {
  const navigation = useAuthNavigation();
  const dispatch = useDispatch();
  const {fields, step} = useSelector((state: RootState) => state?.UserData);
  const [accountType, setAccountType] = useState({
    type: '',
    isLoading: false,
  });

  //* Update state values /
  const updateAccountTypeInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setAccountType(prevState => ({...prevState, [key]: value}));
    },
    [accountType],
  );

  useEffect(() => {
    if (fields) {
      updateAccountTypeInputValue('type', fields?.accountType);
    }
  }, []);

  //** OnPress continue */
  const onClickContinue = useCallback(async () => {
    updateAccountTypeInputValue('isLoading', true);
    if (accountType?.type == 'Instruct') {
      setTimeout(() => {
        updateAccountTypeInputValue('isLoading', false);
        dispatch(setField({key: 'accountType', value: 'Instruct'}));
        dispatch(incrementStep(3));
        navigation.navigate('TellUsMore');
      }, 3000);
    } else {
      const formData = new URLSearchParams();
      formData.append(params?.email, fields?.email!);
      formData.append(params?.password, fields?.password!);
      formData.append(params?.firstName, fields?.firstName!);
      formData.append(params?.lastName, fields?.lastName!);
      formData.append(params?.dateOfBirth, fields?.dateOfBirth!);
      formData.append(
        params?.privacyPolicy,
        fields?.privacyPolicy?.toString()!,
      );
      formData.append(params?.typeUser, 'Exercise');
      try {
        const {data} = await axiosInstance.post(
          constant?.signup,
          formData.toString(),
        );
        updateAccountTypeInputValue('isLoading', false);
        let updatedUserData = {
          ...data,
          typeUser: 'Exercise',
        };
        if (data) {
          dispatch(setField({key: 'accountType', value: 'Exercise'}));
          dispatch(incrementStep(4));
          dispatch(signUpSuccess(updatedUserData));
          dispatch(fieldsClearSuccess());
          Toast(data?.message);
          navigation.navigate('HomeBottomTabs');
        }
      } catch (e: any) {
        updateAccountTypeInputValue('isLoading', false);
        Toast(e?.response?.data?.message);
      }
    }
  }, [accountType]);

  //** Navigate to back screen */
  const onClickBack = useCallback(() => {
    navigation.navigate('CreateAccount');
  }, []);

  return {
    accountType,
    updateAccountTypeInputValue,
    onClickContinue,
    onClickBack,
  };
};

export default useAccountType;
