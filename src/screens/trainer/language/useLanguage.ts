import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {Log} from '@utility/log';
import {useCallback, useEffect, useState} from 'react';
import {LanguageProps} from './Language';
import {useIsFocused} from '@react-navigation/native';

const useLanguage = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('Language');
  const isFocused = useIsFocused();
  const {token} = useAppSelector(state => state.UserData);
  const [languageInfo, setLanguageInfo] = useState<LanguageProps>({
    languageList: [],
    searchLanguageData: [],
    selectLanguage: '',
    search: '',
    isSelected: false,
    isLoading: false,
    isRefreshing: false,
  });

  //** Handle state change */
  const updateLanguageState = useCallback(
    (key: keyof LanguageProps, value: string | boolean | Array<object>) => {
      setLanguageInfo(prevState => ({...prevState, [key]: value}));
    },
    [],
  );

  useEffect(() => {
    updateLanguageState('isLoading', true);
    fetchLanguageData();
  }, [isFocused]);

  //** Referesh location api */
  const onRefreshLanguageApi = useCallback(() => {
    updateLanguageState('isRefreshing', true);
    fetchLanguageData();
  }, [languageInfo]);

  //** Change the value on select location */
  const onSelectLanguage = useCallback(
    (title: string) => {
      updateLanguageState('isSelected', true);
      updateLanguageState('selectLanguage', title);
    },
    [languageInfo],
  );

  //** Select location after pass data and type check after navigation screen  */
  const onSaveChanges = useCallback(() => {
    const screenName = params?.flag;
    const newParams = {selectLanguage: languageInfo?.selectLanguage};
    if (screenName === 'CreateNewProgram') {
      navigation.navigate('CreateNewProgram', newParams);
    }
  }, [languageInfo, params, navigation]);

  //** location api call */
  const fetchLanguageData = async () => {
    try {
      const {data} = await axiosInstance.get(constant.languageList, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const tempLanguage = data?.languages?.map((item: string) => {
        return {
          title: item,
          selected: false,
        };
      });
      updateLanguageState('searchLanguageData', tempLanguage);
      updateLanguageState('languageList', tempLanguage);
      updateLanguageState('isLoading', false);
      updateLanguageState('isRefreshing', false);
      if (params?.selectedValue) {
        updateLanguageState('selectLanguage', params?.selectedValue);
        updateLanguageState('isSelected', true);
      }
    } catch (error) {
      updateLanguageState('isLoading', false);
      updateLanguageState('isRefreshing', false);
      Log('Language error:: ', error);
    }
  };

  //** Handle search location */
  const onSearchFilterFunction = (text: string) => {
    let filterData = languageInfo?.searchLanguageData?.filter(item => {
      const itemData = `${item?.title}`;
      const textData = text?.toLowerCase();
      return itemData?.toLowerCase()?.includes(textData);
    });
    updateLanguageState('search', text);
    updateLanguageState('languageList', filterData);
  };

  return {
    languageInfo,
    onRefreshLanguageApi,
    onSelectLanguage,
    onSaveChanges,
    onSearchFilterFunction,
  };
};

export default useLanguage;
