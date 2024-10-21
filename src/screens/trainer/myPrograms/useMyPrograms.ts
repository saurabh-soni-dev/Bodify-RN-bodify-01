import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {ProgramsItemProps} from 'src/components/card/myProgramsCard/MyProgramsCard';
import {useIsFocused} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {updateToken} from '@redux/userReducer/reducer';
import {Log} from '@utility/log';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {MyProgramsStateProps, ProgramListItemProps} from './MyPrograms';

const useMyPrograms = () => {
  const isFocused = useIsFocused();
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('MyPrograms');
  const dispatch = useAppDispatch();
  const sheetRef = useRef<BottomSheetModal>(null);
  const [programsState, setProgramsState] = useState<MyProgramsStateProps>({
    myProgramsList: [],
    filterProgramsList: [],
    listType: 'Programs',
    searchedProgram: '',
    deleteModal: false,
    isLoading: false,
    isRefreshing: false,
    maxWeeks: 0,
    maxPrice: 0,
    editConfirmationModal: false,
    programId: '',
    bottomSheetType: 'threeDot',
    programStatus: '',
  });
  const snapPoints = useMemo(
    () => (programsState?.bottomSheetType ? ['14%'] : ['38%']),
    [programsState?.bottomSheetType],
  );
  const {token, refreshToken} = useAppSelector(
    (state: RootState) => state.UserData,
  );

  //** Update my programs state */
  const updateMyProgramsState = useCallback(
    <T>(key: keyof MyProgramsStateProps, value: T) => {
      setProgramsState(prevState => ({...prevState, [key]: value}));
    },
    [],
  );

  //** Handle button disable & enable */
  const isPrograms = useMemo(
    () => programsState?.listType === 'Programs',
    [programsState?.listType],
  );

  //** Handle create packages button disable & enable */
  const isCreatePackages = useMemo(
    () => programsState?.myProgramsList?.length === 0,
    [programsState?.myProgramsList],
  );

  useEffect(() => {
    if (isFocused) {
      managePackagesList('Programs');
      refreshTokenUpdate();
      updateMyProgramsState('isLoading', true);
      getMyProgramList();
    }
  }, [isFocused, updateMyProgramsState]);

  //** Referesh location api */
  const onRefreshMyPrograms = useCallback(() => {
    updateMyProgramsState('isRefreshing', true);
    getMyProgramList();
  }, [updateMyProgramsState]);

  /** Start api for refresh access token */
  const refreshTokenUpdate = async () => {
    try {
      const {headers} = await axiosInstance.get(constant.refreshToken, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      const updatedToken = headers?.['set-cookie']
        ?.find(cookie => cookie?.includes('accessToken'))
        ?.split(';')[0]
        .split('=')[1];
      dispatch(updateToken(updatedToken));
    } catch (error) {
      Log('Error refreshing token:', error);
    }
  };
  /** End api for refresh access token */

  /** Start api call for getting program list */
  const getMyProgramList = async () => {
    try {
      const {data} = await axiosInstance.get(constant.programList, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        let newProgramsList = data?.map((item: MyProgramsStateProps) => ({
          ...item,
          isChecked: false,
        }));
        if (params?.filterData) {
          const {level, numberWeeks, price, status} = params?.filterData;
          const levelData = level?.map(item => item.title);
          const statusData = status?.map(item => item.title);
          newProgramsList = data?.filter((item: ProgramListItemProps) => {
            const matchesLevel = levelData?.includes(item?.level);
            const matchesStatus = statusData?.includes(item?.status);
            const matchesNumberWeeks =
              numberWeeks ?? 0 > 4 ? item?.numberOfWeeks === numberWeeks : true;
            const matchesPrice = price ?? 0 > 25 ? item?.price === price : true;
            return (
              matchesLevel ||
              matchesStatus ||
              matchesNumberWeeks ||
              matchesPrice
            );
          });
        }
        updateMyProgramsState('myProgramsList', newProgramsList);
        updateMyProgramsState('filterProgramsList', newProgramsList);
        updateMyProgramsState('isLoading', false);
        updateMyProgramsState('isRefreshing', false);

        //** start Min And Max Length Get weeks and Price */
        const largestValues = data.reduce(
          (acc: any, current: any) => {
            if (current.numberOfWeeks > acc.maxNumberOfWeeks) {
              acc.maxNumberOfWeeks = current.numberOfWeeks;
            }
            if (current.price > acc.maxPrice) {
              acc.maxPrice = current.price;
            }
            return acc;
          },
          {
            maxNumberOfWeeks: 0,
            maxPrice: 0,
          },
        );
        updateMyProgramsState('maxWeeks', largestValues?.maxNumberOfWeeks);
        updateMyProgramsState('maxPrice', largestValues?.maxPrice);
        //** end Min And Max Length Get weeks and Price */
      }
    } catch (error) {
      Log('Error myProgramsList :', error);
      updateMyProgramsState('isLoading', false);
      updateMyProgramsState('isRefreshing', false);
    }
  };
  /** End api call for getting program list */

  //** Start sort packages data based on status  */
  const managePackagesList = useCallback(
    (type: string) => {
      if (type === 'Programs') {
        updateMyProgramsState('myProgramsList', programsState?.myProgramsList);
        updateMyProgramsState('listType', 'Programs');
      } else {
        updateMyProgramsState('listType', 'Packages');
        const sorted = [...(programsState?.myProgramsList || [])]?.sort(
          (a, b) =>
            a?.status === 'Active' && b?.status !== 'Active'
              ? -1
              : a?.status !== 'Active' && b?.status === 'Active'
              ? 1
              : 0,
        );
        updateMyProgramsState('myProgramsList', sorted);
      }
    },
    [programsState, updateMyProgramsState],
  );
  //** End sort packages data based on status  */

  //** Handle package selection */
  const onSelectPackages = useCallback(
    (id?: string) => {
      const updatedData = programsState?.myProgramsList?.map(item => {
        if (item?.programId === id && item?.status === 'Active') {
          return {...item, isChecked: !item?.isChecked};
        }
        return item;
      });
      updateMyProgramsState('myProgramsList', updatedData);
    },
    [programsState, updateMyProgramsState],
  );

  /** Handle search programs item */
  const onSearchPrograms = (text: string) => {
    let filterData = programsState?.filterProgramsList?.filter(item => {
      const itemData = `${item?.name}`;
      const textData = text?.toLowerCase();
      return itemData?.toLowerCase()?.includes(textData);
    });
    updateMyProgramsState('searchedProgram', text);
    updateMyProgramsState('myProgramsList', filterData);
  };

  //** Navigate to create packages screen */
  const navigateToCreatePackages = useCallback(() => {
    navigation.navigate('CreateNewPackages');
    updateMyProgramsState('searchedProgram', '');
    Keyboard.dismiss();
  }, [navigation, updateMyProgramsState]);

  //** Navigate to create program screen */
  const navigateToCreateProgram = (flag?: string) => {
    if (flag) {
      showEditConfirmationModal();
    }
    navigation.navigate('CreateNewProgram', {
      programId: programsState?.programId,
      navigationFlag: flag,
    });
    updateMyProgramsState('searchedProgram', '');
    Keyboard.dismiss();
  };

  //** Open my programs operations bottom sheet */
  const openBottomSheet = (
    bottomSheetType?: string,
    programId?: string,
    status?: string,
  ) => {
    sheetRef.current?.present();
    updateMyProgramsState('bottomSheetType', bottomSheetType);
    updateMyProgramsState('programId', programId);
    updateMyProgramsState('programStatus', status);
  };

  //** Navigate to filter screen */
  const navigateToMyProgramsFilter = useCallback(() => {
    navigation.navigate('Filters', {
      filterScreenType: 'myPrograms',
      filterDataPass: params?.filterData,
      maxWeeks: programsState?.maxWeeks,
      maxPrice: programsState?.maxPrice,
    });
    updateMyProgramsState('searchedProgram', '');
  }, [params?.filterData, navigation, programsState]);

  //** Navigate to my workout library */
  const navigateToMyWorkoutLibrary = useCallback(() => {
    navigation.navigate('MyWorkoutLibrary');
    updateMyProgramsState('searchedProgram', '');
    sheetRef.current?.close();
    Keyboard.dismiss();
  }, [navigation]);

  //** Hide/Show edit confirmation modal */
  const showEditConfirmationModal = () => {
    updateMyProgramsState(
      'editConfirmationModal',
      !programsState?.editConfirmationModal,
    );
  };

  const onThreeDotSheet = (id: number) => {
    switch (id) {
      case 2:
        navigateToMyWorkoutLibrary();
        break;

      default:
        break;
    }
  };

  //** start bottomSheet menu event */
  const onBottomSheet = useCallback(
    (type: number) => {
      switch (type) {
        case 3:
          navigation.navigate('ReviewsAndRatings');
          break;
        case 4:
          showEditConfirmationModal();
          break;
        case 6:
          updateMyProgramsState('deleteModal', programsState?.deleteModal);
          break;
        default:
          break;
      }
      sheetRef.current?.close();
    },
    [sheetRef, updateMyProgramsState],
  );

  return {
    programsState,
    sheetRef,
    params,
    isPrograms,
    onRefreshMyPrograms,
    managePackagesList,
    onSelectPackages,
    openBottomSheet,
    onSearchPrograms,
    navigateToCreatePackages,
    navigateToCreateProgram,
    navigateToMyProgramsFilter,
    navigateToMyWorkoutLibrary,
    onBottomSheet,
    showEditConfirmationModal,
    isCreatePackages,
    snapPoints,
    onThreeDotSheet,
  };
};

export default useMyPrograms;
