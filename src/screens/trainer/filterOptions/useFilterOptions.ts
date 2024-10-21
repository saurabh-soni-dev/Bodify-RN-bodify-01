import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {FilterOptionsState, MuscleListItemProps} from './FilterOptions';
import {
  librariesList,
  mainMuscleList,
  programsLabelData,
  programsStatusData,
  typeList,
} from './filterOptions.const';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {useAppSelector} from '@hooks/useRedux';

const useFilterOptions = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('FilterOptions');
  const {token} = useAppSelector(state => state.UserData);
  const [filterOptions, setFilterOptions] = useState<FilterOptionsState>({
    muscleList: [],
    isLoading: true,
    levelList: [],
  });
  //** Update state values */
  const updateFilterOptionsState = useCallback(
    (value: Array<MuscleListItemProps> | boolean | null, state: string) => {
      setFilterOptions(prevState => ({...prevState, [state]: value}));
    },
    [],
  );
  useEffect(() => {
    getLevels();
  }, []);
  useEffect(() => {
    updateFilterOptionsState(true, 'isLoading');
    if (params?.filterTypeOptions) {
      const filterTypeMap: {[key: string]: MuscleListItemProps[]} = {
        'Main Muscle': mainMuscleList,
        Type: typeList,
        LevelPrograms: filterOptions?.levelList,
        Status: programsStatusData,
      };
      const updatedMuscleList =
        filterTypeMap[params.filterTypeOptions] || librariesList;
      if (params?.filterDataOption) {
        updatedMuscleList.forEach((muscle: MuscleListItemProps) => {
          const filterItem: MuscleListItemProps | undefined =
            params?.filterDataOption?.find(
              (item): item is MuscleListItemProps => item?.id === muscle?.id,
            );
          if (filterItem) {
            muscle.checked = filterItem?.checked;
          }
        });
      } else {
        updatedMuscleList.forEach(item => {
          item.checked = false;
        });
      }
      updateFilterOptionsState(updatedMuscleList, 'muscleList');
      updateFilterOptionsState(false, 'isLoading');
    }
  }, [params, filterOptions?.levelList]);
  const getLevels = async () => {
    try {
      const {data} = await axiosInstance.get(constant.levelList, {
        headers: {Authorization: `Bearer ${token}`},
      });
      const tempLevel = data?.levels?.map((item: string) => ({
        id: `${Math.random()}`,
        title: item,
        checked: false,
      }));
      updateFilterOptionsState(tempLevel, 'levelList');
    } catch (error) {}
  };
  const isSaveButton = useMemo(
    () => filterOptions?.muscleList?.filter(item => item.checked).length < 1,
    [filterOptions],
  );

  const onSelectMuscle = useCallback(
    (index: number) => {
      const newList = [...filterOptions?.muscleList];
      newList[index].checked = !newList[index].checked;
      updateFilterOptionsState(newList, 'muscleList');
    },
    [filterOptions?.muscleList, updateFilterOptionsState],
  );

  const onSaveNavigateToFilterScreen = useCallback(() => {
    navigation.navigate('Filters', {
      filterOptionsData: filterOptions?.muscleList?.filter(
        item => item.checked,
      ),
      filterTypeOptions: params?.filterTypeOptions,
      filterScreenType: params?.filterScreenType,
      flagText: 'save',
      maxPrice: params?.maxPrice,
      maxWeeks: params?.maxWeeks,
    });
  }, [
    filterOptions?.muscleList,
    params?.filterTypeOptions,
    params?.filterScreenType,
    navigation,
  ]);

  const onClearAllFilters = useCallback(() => {
    const newList = filterOptions?.muscleList.map(muscle => ({
      ...muscle,
      checked: false,
    }));
    updateFilterOptionsState(newList, 'muscleList');
  }, [filterOptions]);

  const navigateGoBackScreen = useCallback(() => {
    onClearAllFilters();
    navigation.navigate('Filters', {
      filterOptionsData: [],
      filterTypeOptions: params?.filterTypeOptions,
      filterScreenType: params?.filterScreenType,
      flagText: 'back',
    });
  }, [params, navigation]);

  return {
    onSelectMuscle,
    params,
    onSaveNavigateToFilterScreen,
    filterOptions,
    isSaveButton,
    onClearAllFilters,
    navigateGoBackScreen,
  };
};

export default useFilterOptions;
