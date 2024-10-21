import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppDispatch} from '@hooks/useRedux';
import {useFocusEffect} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {
  fieldsClearSuccess,
  loginSuccess,
  signUpSuccess,
} from '@redux/userReducer/reducer';
import {Toast} from '@utility/functions/toast';
import {checkString} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import moment from 'moment';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {TellUsErrorProps, TellUsInfoProps} from './TellUsMore';

const useTellUsMore = () => {
  const dispatch = useAppDispatch();
  const navigation = useAuthNavigation();
  const route = useAuthRoute('TellUsMore');
  const {fields, step} = useSelector((state: RootState) => state?.UserData);

  const inputRef = useRef<TextInput>(null);
  let selectedLocation = route?.params?.selectLocation ?? '';
  const [tellUsInfo, setTellUsInfo] = useState<TellUsInfoProps>({
    education: '',
    experience: '',
    experienceFormat: '',
    selectLocation: selectedLocation,
    instagram: '',
    tiktok: '',
    youtube: '',
    about: '',
    selectModal: false,
    loading: false,
    visibleDatePicker: false,
    locFoc: false,
  });
  const [tellUsMoreError, setTellUsMoreError] = useState<TellUsErrorProps>({
    educationError: undefined,
    experienceError: undefined,
    locationError: undefined,
    instagramError: undefined,
    tiktokError: undefined,
    youtubeError: undefined,
    aboutError: undefined,
  });

  //* Update state values /
  const updateTellUsMoreInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setTellUsInfo(prevState => ({...prevState, [key]: value}));
    },
    [tellUsInfo, route],
  );

  useFocusEffect(
    useCallback(() => {
      updateTellUsMoreInputValue('locFoc', false);
    }, []),
  );

  useEffect(() => {
    updateTellUsMoreInputValue('selectLocation', selectedLocation);
    if (route?.params?.selectLocation) {
      updateTellUsMoreInputValue('locFoc', false);
    }
  }, [tellUsInfo.selectLocation, route]);

  //** Handle submit button isDisabled & isActive*/
  const isContinue = useMemo(
    () =>
      !tellUsInfo?.education ||
      !tellUsInfo?.experience ||
      !tellUsInfo?.selectLocation ||
      !tellUsInfo?.about,
    [tellUsInfo],
  );

  //** handle date picker open */
  const onOpenDatePicker = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      updateTellUsMoreInputValue(
        'visibleDatePicker',
        !tellUsInfo?.visibleDatePicker,
      );
    }, 500);
  };

  //**  handle date picker close */
  const onCloseDatePicker = () => {
    updateTellUsMoreInputValue(
      'visibleDatePicker',
      !tellUsInfo?.visibleDatePicker,
    );
  };

  //** Format experience date  */
  const dateFormatter = useCallback(
    (dateString: string, referenceDate: string) => {
      const startDate = moment(dateString); // Use dateString as the start date
      const endDate = moment(referenceDate); // Use referenceDate as the end date
      // Clone the startDate moment object
      const clonedStartDate = startDate.clone();
      // years
      const years = endDate.diff(clonedStartDate, 'years');
      clonedStartDate.add(years, 'years');
      // months
      const months = endDate.diff(clonedStartDate, 'months');
      clonedStartDate.add(months, 'months');
      // days
      const days = endDate.diff(clonedStartDate, 'days');
      const formattedStartDate = startDate.format('DD.MM.YYYY');
      return `Since ${formattedStartDate} (${years} Years)`;
    },
    [tellUsInfo?.experience],
  );

  //** Select experience */
  const onSelectExperience = useCallback(
    (date: string) => {
      if (inputRef.current) {
        setTimeout(() => {
          inputRef?.current?.blur();
        }, 500);
      }
      const referenceDate = new Date();
      const result = dateFormatter(date, referenceDate?.toISOString());
      updateTellUsMoreInputValue('experience', result);
      updateTellUsMoreInputValue('experienceFormat', date);
      onCloseDatePicker();
    },
    [tellUsInfo],
  );

  //* Validate tell us more /
  const onValidateTellUsMore = useCallback(() => {
    let tempError = {};
    if (!checkString(tellUsInfo?.education)) {
      tempError = {
        educationError: validationMessage.invalidEducation,
      };
    } else if (tellUsInfo?.about?.length >= 500) {
      tempError = {
        aboutError: validationMessage.invalidAbout,
      };
    } else {
      tempError = {};
      onSubmitUserInfo();
    }
    setTellUsMoreError(tempError);
  }, [tellUsInfo, tellUsMoreError]);

  //* Final Signup api call /
  const onSubmitUserInfo = useCallback(async () => {
    updateTellUsMoreInputValue('loading', true);
    const formData = {
      [params?.email]: fields?.email!,
      [params?.password]: fields?.password!,
      [params?.firstName]: fields?.firstName!,
      [params?.lastName]: fields?.lastName!,
      [params?.dateOfBirth]: fields?.dateOfBirth!,
      [params?.privacyPolicy]: fields?.privacyPolicy?.toString()!,
      [params?.typeUser]: fields?.accountType!,
      [params?.educationAndQualification]: tellUsInfo?.education,
      [params?.experience]: tellUsInfo?.experienceFormat,
      [params?.country]: selectedLocation,
      [params?.about]: tellUsInfo?.about,
      [params?.socialMedia]: {
        instagram: tellUsInfo?.instagram,
        tiktok: tellUsInfo?.tiktok,
        youtube: tellUsInfo?.youtube,
      },
    };
    try {
      const {data} = await axiosInstance.post(constant?.signup, formData);

      if (data) {
        let updatedUserData = {
          accessToken: data?.accessToken,
          refreshToken: data?.refreshToken,
          typeUser: 'Instruct',
        };
        dispatch(loginSuccess(updatedUserData));
        updateTellUsMoreInputValue('loading', false);
        Toast(data?.message);
        setTellUsInfo(prevState => ({
          ...prevState,
          education: '',
          experience: '',
          instagram: '',
          tiktok: '',
          youtube: '',
          about: '',
          selectLocation: '',
        }));
        dispatch(fieldsClearSuccess());
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeBottomTabs'}],
        });
      }
    } catch (e: any) {
      updateTellUsMoreInputValue('loading', false);
      Toast(e?.response?.data?.message);
    }
  }, [tellUsInfo]);

  //** Select location */
  const navigateToLocation = useCallback(() => {
    Keyboard.dismiss();
    updateTellUsMoreInputValue('locFoc', true);
    setTimeout(() => {
      navigation.navigate('Location', {
        flag: 'TellUsMore',
        selectedValue: tellUsInfo?.selectLocation,
      });
    }, 200);
  }, [tellUsInfo?.selectLocation]);

  //** Navigate to back screen */
  const onClickBack = useCallback(() => {
    navigation.navigate('AccountType');
  }, []);

  return {
    inputRef,
    tellUsInfo,
    tellUsMoreError,
    updateTellUsMoreInputValue,
    isContinue,
    onOpenDatePicker,
    onCloseDatePicker,
    onSelectExperience,
    onValidateTellUsMore,
    navigateToLocation,
    selectedLocation,
    onClickBack,
  };
};

export default useTellUsMore;
