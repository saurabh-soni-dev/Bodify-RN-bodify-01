import { Button, Checkbox, CustomStatusbar, Header } from '@components';
import color from '@theme/color';
import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './deviceFilter.style';
import useDeviceFilter from './useDeviceFilter';

export interface DeviceFilterProps {
  deviceList: deviceListItem[];
  selectedDevice: string;
}
interface deviceListItem {
  id: number;
  title: string;
  value: boolean;
}
const DeviceFilter: FC = () => {
  const {deviceFilter, onSelectDevice, clearFilter, onPressSave} =
    useDeviceFilter();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        barStyle="dark-content"
        backgroundColor={color.primaryBG}
      />
      <View style={styles.mainContainer}>
        <Header
          lable="Device"
          showBackIcon
          rightButtonText="Clear All"
          onPressRightButton={clearFilter}
          containerStyle={styles.headerContainer}
        />
        <View style={styles.listContainer}>
          {deviceFilter?.deviceList?.map(item => (
            <View style={styles.row}>
              <Checkbox
                key={item?.id}
                label={item?.title}
                isChecked={item?.value}
                onPress={() => onSelectDevice(item?.id)}
              />
            </View>
          ))}
        </View>
        <View style={styles.btnView}>
          <Button
            label="Save"
            disabled={!deviceFilter?.selectedDevice}
            inActive={!deviceFilter?.selectedDevice}
            onPress={onPressSave}
          />
        </View>
      </View>
    </View>
  );
};

export default DeviceFilter;
