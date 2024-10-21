import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';
import {DeviceFilterProps} from './DeviceFilter';
import {deviceList} from './deviceFilter.const';

const useDeviceFilter = () => {
  const navigation = useAuthNavigation();
  const [deviceFilter, setDeviceFilter] = useState<DeviceFilterProps>({
    deviceList: deviceList,
    selectedDevice: '',
  });

  //** Handle state change */
  const updateDeviceFilterState = useCallback(
    (key: string, value: string | Array<object>) => {
      setDeviceFilter(prevState => ({...prevState, [key]: value}));
    },
    [deviceFilter],
  );

  //** Handle device selection */
  const onSelectDevice = useCallback(
    (id: number) => {
      const selectedDevice = deviceList?.find(device => device?.id === id);
      if (selectedDevice) {
        const updatedDeviceList = deviceFilter?.deviceList?.map(item =>
          item?.id === id ? {...item, value: true} : {...item, value: false},
        );
        updateDeviceFilterState('deviceList', updatedDeviceList);
        updateDeviceFilterState('selectedDevice', selectedDevice?.title);
      }
    },
    [deviceFilter, updateDeviceFilterState],
  );

  //** Clear all the selected filter */
  const clearFilter = useCallback(() => {
    const updatedDeviceList = deviceFilter?.deviceList.map(item => {
      return {...item, value: false};
    });
    updateDeviceFilterState('selectedDevice', '');
    updateDeviceFilterState('deviceList', updatedDeviceList);
  }, [deviceFilter]);

  // Save seected filters
  const onPressSave = useCallback(() => {
    const params = {device: deviceFilter?.selectedDevice};
    navigation.navigate('AnalyticsFilters', params);
  }, [deviceFilter]);

  return {deviceFilter, onSelectDevice, clearFilter, onPressSave};
};

export default useDeviceFilter;
