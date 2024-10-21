import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {AnalyticsFiltersProps} from './AnalyticsFilters';

const useAnalyticsFilters = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const {params} = useAuthRoute('AnalyticsFilters');
  const [filterInfo, setFilterInfo] = useState<AnalyticsFiltersProps>({
    device: '',
    date: {
      startDate: '',
      endDate: '',
    },
    location: '',
  });

  useEffect(() => {
    if (params?.device) {
      updateFilterInfoState('device', params?.device);
    }
    if (params?.date) {
      updateFilterInfoState('date', {
        startDate: params?.date?.startDate,
        endDate: params?.date?.endDate,
      });
    }
    if (params?.selectLocation) {
      updateFilterInfoState('location', params?.selectLocation);
    }
  }, [isFocused]);

  //** Update filter info state */
  const updateFilterInfoState = useCallback(
    (key: string, value: string | Object) => {
      setFilterInfo(prevState => ({...prevState, [key]: value}));
    },
    [filterInfo],
  );

  //** handle save button disabled & active */
  const isSaveButton = useMemo(() => {
    const values = Object.values(filterInfo);
    return values.every(value => {
      if (typeof value === 'object') {
        return Object.values(value).every(subValue => !!subValue);
      }
      return !!value;
    });
  }, [filterInfo]);

  //** Navigate To speciifc filter screen */
  const onPressFilter = useCallback((index: number) => {
    switch (index) {
      case 1:
        navigation.navigate('DeviceFilter');
        break;
      case 2:
        navigation.navigate('DatesFilter');
        break;
      case 3:
        navigation.navigate('Location', {flag: 'AnalyticsFilters'});
        break;
      default:
        break;
    }
  }, []);

  //** Clear all the selected filters */
  const onClearAllFilters = useCallback(() => {
    setFilterInfo({device: '', date: {}, location: ''});
  }, []);

  //** Save selected filters */
  const onPressSave = useCallback(() => {
    navigation.goBack();
  }, []);

  return {
    filterInfo,
    onPressFilter,
    onClearAllFilters,
    isSaveButton,
    onPressSave,
  };
};

export default useAnalyticsFilters;
