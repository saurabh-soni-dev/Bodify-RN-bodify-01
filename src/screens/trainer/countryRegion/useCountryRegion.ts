import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { CountryRegionProps } from './CountryRegion';
import { regions } from './countryRegion.const';

const useCountryRegion = () => {
  const navigation = useAuthNavigation();
  const [countryRegionInfo, setCountryRegionInfo] =
    useState<CountryRegionProps>({
      regionList: regions,
      filterRegionList: regions,
      region: '',
      isSelected: false,
    });

  //** Handle state change */
  const updateRegionState = useCallback(
    (key: string, value: string | boolean | Array<object>) => {
      setCountryRegionInfo(prevState => ({...prevState, [key]: value}));
    },
    [countryRegionInfo],
  );

  //** Change the value on select region */
  const onSelectRegion = useCallback(
    (id: number) => {
      updateRegionState('isSelected', !countryRegionInfo?.isSelected);
      let data = countryRegionInfo?.regionList?.map(region =>
        region.id === id
          ? {...region, selected: !region.selected}
          : {...region, selected: false},
      );
      updateRegionState('regionList', data);
    },
    [countryRegionInfo],
  );

  //** Handle search regions */
  const onSearchRegions = useCallback(
    (text: string) => {
      updateRegionState('region', text);
      let filterData = countryRegionInfo?.filterRegionList?.filter(item => {
        const itemData = `${item?.title}`;
        const textData = text?.toLowerCase();
        return itemData?.toLowerCase()?.includes(textData);
      });
      updateRegionState('regionList', filterData);
    },
    [countryRegionInfo],
  );

  return {
    countryRegionInfo,
    onSelectRegion,
    onSearchRegions,
  };
};

export default useCountryRegion;
