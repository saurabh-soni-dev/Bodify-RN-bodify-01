import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {Log} from '@utility/log';
import {useCallback, useEffect, useState} from 'react';
import {LocationProps} from './Location';

const useLocation = () => {
  const navigation = useAuthNavigation();
  const route = useAuthRoute('Location');
  const [locationInfo, setLocationInfo] = useState<LocationProps>({
    locationList: [],
    searchLocationData: [],
    selectLocation: '',
    search: '',
    isSelected: false,
    isLoading: false,
    isRefreshing: false,
  });
  useEffect(() => {
    updateLocationState('isLoading', true);
    fetchLocationData();
  }, []);

  //** Handle state change */
  const updateLocationState = useCallback(
    (key: string, value: string | number | boolean | unknown) => {
      setLocationInfo(prevState => ({...prevState, [key]: value}));
    },
    [],
  );

  //** Referesh location api */
  const onRefreshLocationApi = useCallback(() => {
    updateLocationState('isRefreshing', true);
    fetchLocationData();
  }, [locationInfo]);

  //** Change the value on select location */
  const onSelectLocation = useCallback(
    (title: string) => {
      updateLocationState('isSelected', true);
      updateLocationState('selectLocation', title);
    },
    [locationInfo],
  );
  //** Select location after pass data and type check after navigation screen  */
  const onSaveChanges = useCallback(() => {
    const screenName = route?.params?.flag;
    const params = {selectLocation: locationInfo?.selectLocation};
    if (screenName === 'AnalyticsFilters') {
      navigation.navigate('AnalyticsFilters', params);
    } else if (screenName === 'TellUsMore') {
      navigation.navigate('TellUsMore', params);
    } else if (screenName === 'EditProfile') {
      navigation.navigate('EditProfile', params);
    }
  }, [locationInfo]);
  //** location api call */
  const fetchLocationData = async () => {
    try {
      const {data} = await axiosInstance.get(constant.countryList);
      const tempCountry = data.map((item: string, index: number) => {
        return {
          title: item,
          selected: false,
        };
      });
      updateLocationState('searchLocationData', tempCountry);
      updateLocationState('locationList', tempCountry);
      updateLocationState('isLoading', false);
      updateLocationState('isRefreshing', false);
      if (route?.params?.selectedValue) {
        updateLocationState('selectLocation', route?.params?.selectedValue);
        updateLocationState('isSelected', true);
      }
    } catch (error) {
      updateLocationState('isLoading', false);
      updateLocationState('isRefreshing', false);
      Log('country list failed', error);
    }
  };

  //** Handle search location */
  const onSearchFilterFunction = (text: string) => {
    let filterData = locationInfo?.searchLocationData?.filter(item => {
      const itemData = `${item?.title}`;
      const textData = text?.toLowerCase();
      return itemData?.toLowerCase()?.includes(textData);
    });
    updateLocationState('search', text);
    updateLocationState('locationList', filterData);
  };

  return {
    locationInfo,
    onRefreshLocationApi,
    onSelectLocation,
    onSaveChanges,
    onSearchFilterFunction,
  };
};

export default useLocation;
