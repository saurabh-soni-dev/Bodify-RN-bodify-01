import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {FilterState} from './Filters';
import {filterDataExercise, filterDataLibrary} from './filterType.const';
import {Log} from '@utility/log';

const useFilters = () => {
  const navigation = useAuthNavigation();
  const isFocus = useIsFocused();
  const {params} = useAuthRoute('Filters');
  const [filter, setFilter] = useState<FilterState>({
    filterData: [],
    library: [],
    type: [],
    mainMuscle: [],
    level: [],
    status: [],
    lowPrice: 10,
    highPrice: params?.maxPrice ?? 10,
    lowWeek: 1,
    highWeek: params?.maxWeeks ?? 0,
    isClear: false,
  });

  //** Update state values */
  const updateFilterState = useCallback(
    (value: unknown, state: string) => {
      setFilter(prevState => ({...prevState, [state]: value}));
    },
    [filter],
  );

  useEffect(() => {
    Log('params?.maxWeeks', params?.maxWeeks);
  }, [params?.maxPrice, params?.maxWeeks]);

  useEffect(() => {
    if (params?.filterScreenType) {
      const {filterScreenType, filterTypeOptions, filterOptionsData} = params;
      switch (filterScreenType) {
        case 'myLibrary':
          updateFilterState(filterDataLibrary, 'filterData');
          switch (filterTypeOptions) {
            case 'Type':
              updateFilterState(filterOptionsData, 'type');
              break;
            case 'Main Muscle':
              updateFilterState(filterOptionsData, 'mainMuscle');
              break;
            default:
              break;
          }
          break;
        case 'Exercise':
          updateFilterState(filterDataExercise, 'filterData');
          switch (filterTypeOptions) {
            case 'Library':
              updateFilterState(filterOptionsData, 'library');
              break;
            case 'Type':
              updateFilterState(filterOptionsData, 'type');
              break;
            case 'Main Muscle':
              updateFilterState(filterOptionsData, 'mainMuscle');
              break;
            default:
              break;
          }
          break;
        default:
          switch (filterTypeOptions) {
            case 'LevelPrograms':
              updateFilterState(filterOptionsData, 'level');
              break;
            case 'Status':
              updateFilterState(filterOptionsData, 'status');
              break;
            default:
              break;
          }
          break;
      }
    }
  }, [isFocus]);

  useEffect(() => {
    if (params?.filterDataPass) {
      const {
        library,
        mainMuscle,
        type,
        level,
        status,
        lowWeek,
        highWeek,
        lowPrice,
        highPrice,
      } = params?.filterDataPass;
      updateFilterState(library, 'library');
      updateFilterState(type, 'type');
      updateFilterState(mainMuscle, 'mainMuscle');
      updateFilterState(level, 'level');
      updateFilterState(status, 'status');
      updateFilterState(lowWeek, 'lowWeek');
      updateFilterState(highWeek, 'highWeek');
      updateFilterState(lowPrice, 'lowPrice');
      updateFilterState(highPrice, 'highPrice');
    }
  }, [params]);

  //** Navigate to check type after navigate  Location and FilterOptions  */
  const onSelectFilters = useCallback(
    (type: string) => {
      const {flagText, filterScreenType, filterOptionsData} = params || {};
      if (type == 'Country') {
        navigation.navigate('Location', {flag: 'Filters'});
      } else {
        if (flagText === 'save') {
          navigation.navigate('FilterOptions', {
            filterTypeOptions: type,
            filterScreenType: filterScreenType,
            filterDataOption: filterOptionsData,
          });
        } else {
          navigation.navigate('FilterOptions', {
            filterTypeOptions: type,
            filterScreenType: filterScreenType,
            maxWeeks: params?.maxWeeks,
            maxPrice: params?.maxPrice,
          });
        }
      }
    },
    [params],
  );

  //** change values slider Price */
  const onValueChangePrice = useCallback((low: number, high: number) => {
    if (high - low >= 300) {
      updateFilterState(low, 'lowPrice');
      updateFilterState(high, 'highPrice');
    }
  }, []);

  //** change values slider Week  */
  const onValueChangeWeek = useCallback((low: number, high: number) => {
    if (high - low >= 4) {
      updateFilterState(high, 'highWeek');
      updateFilterState(low, 'lowWeek');
    }
  }, []);

  //** Navigate to Exercise screen  */
  const onSaveToNavigateExercise = useCallback(() => {
    const {
      library,
      type,
      mainMuscle,
      level,
      status,
      highPrice,
      lowPrice,
      highWeek,
      lowWeek,
    } = filter;
    const newFilterData = {library, type, mainMuscle};
    const newProgramsData = {
      level,
      price: Math.abs(highPrice - lowPrice),
      status,
      numberWeeks: Math.abs(highWeek - lowWeek),
      lowWeek: lowWeek,
      highWeek: highWeek,
      highPrice: highPrice,
      lowPrice: lowPrice,
    };
    const {filterScreenType} = params || {};

    if (filter?.isClear == true) {
      switch (filterScreenType) {
        case 'Exercise':
          navigation.navigate('Exercise', {filterData: undefined});
          break;
        case 'myLibrary':
          navigation.navigate('MyWorkoutLibrary', {filterData: undefined});
          break;
        case 'myPrograms':
          navigation.navigate('MyPrograms', {filterData: undefined});
          break;
        default:
          break;
      }
    } else {
      if (
        (filter?.highPrice == params?.maxPrice && filter?.lowPrice == 10) ||
        (filter?.highWeek == params?.maxWeeks && filter?.lowWeek == 1)
      ) {
        navigation.navigate('MyPrograms', {
          filterData: undefined,
        });
      } else {
        switch (filterScreenType) {
          case 'Exercise':
            navigation.navigate('Exercise', {filterData: newFilterData});
            break;
          case 'myLibrary':
            navigation.navigate('MyWorkoutLibrary', {
              filterData: newFilterData,
            });
            break;
          case 'myPrograms':
            navigation.navigate('MyPrograms', {filterData: newProgramsData});
            break;
          default:
            break;
        }
      }
    }
  }, [filter, filter?.isClear]);

  //** Handle All filter clear */
  const onClearAllFilters = useCallback(() => {
    updateFilterState(true, 'isClear');
    updateFilterState([], 'library');
    updateFilterState([], 'type');
    updateFilterState([], 'mainMuscle');
    updateFilterState([], 'level');
    updateFilterState([], 'status');
    updateFilterState(10, 'lowPrice');
    updateFilterState(params?.maxPrice, 'highPrice');
    updateFilterState(1, 'lowWeek');
    updateFilterState(params?.maxWeeks, 'highWeek');
  }, [filter]);

  //** Handle save button disable & active */
  const isSaveButton = useMemo(
    () =>
      !(
        filter?.library?.length > 0 ||
        filter?.mainMuscle?.length > 0 ||
        filter?.type?.length > 0 ||
        filter?.level?.length > 0 ||
        filter?.status?.length > 0 ||
        filter?.lowPrice < 10 ||
        filter?.highPrice < Number(params?.maxPrice) ||
        filter?.lowWeek < 1 ||
        filter?.highWeek < Number(params?.maxWeeks)
      ),
    [filter],
  );

  return {
    onSelectFilters,
    filter,
    params,
    onValueChangePrice,
    onSaveToNavigateExercise,
    onClearAllFilters,
    isSaveButton,
    onValueChangeWeek,
  };
};
export default useFilters;
