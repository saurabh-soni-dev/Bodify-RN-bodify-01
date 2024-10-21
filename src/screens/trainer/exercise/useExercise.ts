import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {Log} from '@utility/log';
import {useCallback, useEffect, useMemo, useState} from 'react';
import base64 from 'react-native-base64';
import {
  ExerciseProps,
  FilteredExercisesItemProps,
  exerciseModalDataProps,
  exercisesItemProps,
} from './Exercise';

const useExercise = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('Exercise');
  const isFocused = useIsFocused();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [exerciseState, setExerciseState] = useState<ExerciseProps>({
    exerciseList: [],
    filteredExerciseList: [],
    selectedExercises: [],
    showInstructionModal: false,
    isVideoPaused: true,
    isLoading: true,
    isRefreshing: false,
    searchedExercise: '',
    exerciseModalData: {},
    exerciseVideoSource: {
      uri: '',
      headers: {
        Authorization: '',
      },
    },
  });
  const variations = {
    title: `Variations`,
    description: `This exercise can also be performed without a hyperextension bench, but in this case you will need a spotter. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift.`,
  };
  //** Update exercise state */
  const updateExerciseState = useCallback(<T>(key: string, value: T) => {
    setExerciseState(prevState => ({...prevState, [key]: value}));
  }, []);

  /** Handle add button enabled or disable */
  const isAddEnabled = useMemo(() => {
    if (exerciseState?.selectedExercises?.length > 0) {
      return true;
    }
    return false;
  }, [exerciseState?.selectedExercises]);

  useEffect(() => {
    if (isFocused) {
      updateExerciseState('isLoading', true);
      onGetExercise();
      if (params?.selectedExercises) {
        updateExerciseState('selectedExercises', params?.selectedExercises);
      }
    }
  }, [isFocused, updateExerciseState, params?.selectedExercises]);

  //** Refresh exercise list */
  const onRefresh = useCallback(() => {
    onGetExercise();
  }, [exerciseState?.isRefreshing]);

  //** Start Exercise list getting api call */
  const onGetExercise = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.exercises}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        let filteredExercises = data;
        if (
          params?.filterData &&
          (params?.filterData?.mainMuscle?.length > 0 ||
            params?.filterData?.type?.length > 0 ||
            params?.filterData?.library?.length > 0)
        ) {
          const {library, mainMuscle, type} = params?.filterData;
          const libraryMap = library?.map(item =>
            item.title === 'My Library' ? 'instruct' : 'bodify',
          );
          const mainMuscleMap = mainMuscle?.map(item => item.title);
          const typeData = type?.map(item => item.title);
          filteredExercises = data?.filter(
            (item: FilteredExercisesItemProps) => {
              return (
                mainMuscleMap?.includes(item?.mainMuscle) ||
                libraryMap?.includes(item?.ownerType) ||
                typeData?.includes(item?.type)
              );
            },
          );
        }
        updateExerciseState('exerciseList', filteredExercises);
        updateExerciseState('filteredExerciseList', filteredExercises);
        updateExerciseState('isLoading', false);
        updateExerciseState('isRefreshing', false);
      }
    } catch (error: any) {
      updateExerciseState('isLoading', false);
      updateExerciseState('isRefreshing', false);
    }
  };
  //** End Exercise list getting api call */

  //** Handle referral item search */
  const onSearchExercise = useCallback(
    (text: string) => {
      updateExerciseState('searchedExercise', text);
      const filteredList = exerciseState?.filteredExerciseList?.filter(item => {
        return (
          item?.title?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.defaultParametersReps
            ?.toLowerCase()
            ?.includes(text?.toLowerCase()) ||
          item?.defaultParametersSets
            ?.toLowerCase()
            ?.includes(text?.toLowerCase()) ||
          item?.equipment?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.mainMuscle?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.ownerType?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.secondaryMuscle?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.tags?.toLowerCase()?.includes(text?.toLowerCase())
        );
      });
      updateExerciseState('exerciseList', filteredList);
    },
    [exerciseState, updateExerciseState],
  );

  //** Start exercise selection */
  const onSelectExercise = useCallback(
    (item: exercisesItemProps) => {
      const isSelected = exerciseState?.selectedExercises?.includes(item);
      const updatedSelectedExercises = isSelected
        ? exerciseState?.selectedExercises?.filter(
            selectedExercise => selectedExercise !== item,
          )
        : [...exerciseState?.selectedExercises, item];
      updateExerciseState('selectedExercises', updatedSelectedExercises);
    },
    [exerciseState, updateExerciseState],
  );
  //** End exercise selection */

  //** start Navigate to exercise filter screen */
  const navigateToFilterScreen = useCallback(() => {
    navigation.navigate('Filters', {
      filterScreenType: 'Exercise',
      filterDataPass: params?.filterData,
    });
  }, [params?.filterData, navigation]);

  //** Navigate to create new exercise screen  */
  const navigateToCreateNewExercise = useCallback(() => {
    navigation.navigate('NewExercise');
  }, [navigation]);

  //** Start show instructions modal */
  const openInstructionModal = useCallback(
    (exercise: exerciseModalDataProps, index: number) => {
      let currentExercise = index + 1;
      let totalExercises = exerciseState?.exerciseList?.length;
      updateExerciseState('exerciseModalData', {
        ...exercise,
        currentExercise,
        totalExercises,
      });
      getExerciseVideo(exercise?.videoId);
      updateExerciseState(
        'showInstructionModal',
        !exerciseState.showInstructionModal,
      );
    },
    [exerciseState, updateExerciseState],
  );
  //** End show instructions modal */

  //** Start hide instructions modal */
  const onCloseInstructionModal = useCallback(() => {
    updateExerciseState('showInstructionModal', false);
    setTimeout(() => {
      updateExerciseState('exerciseModalData', '');
    }, 1000);
  }, [exerciseState, updateExerciseState]);
  //** End hide instructions modal */

  //** Add Exercise after bodyWeightOnly   */
  const navigateToBodyWeightOnlyScreen = useCallback(() => {
    const screenName = params?.flag;
    const exerciseFlag = params?.exerciseFlag;
    const setIndex = params?.setIndex;
    const param = {
      selectedExercises: exerciseState?.selectedExercises,
      exerciseFlag: exerciseFlag,
      setIndex: setIndex,
    };
    if (screenName === 'bodyWeightOnly') {
      navigation.navigate('BodyWeightOnly', param);
    }
  }, [exerciseState, params, navigation]);

  //** Start Exercise video getting api call */
  const getExerciseVideo = async (videoId?: string) => {
    if (videoId) {
      const exerciseVideo = {
        uri: `${constant.baseURL}${constant.exerciseVideo}${videoId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      updateExerciseState('exerciseVideoSource', exerciseVideo);
    }
  };
  //** End Exercise video getting api call */

  const navigateToBackScreen = useCallback(() => {
    navigation.navigate('BodyWeightOnly', {});
  }, [navigation]);

  return {
    exerciseState,
    updateExerciseState,
    isAddEnabled,
    onRefresh,
    onSearchExercise,
    onSelectExercise,
    navigateToFilterScreen,
    navigateToCreateNewExercise,
    openInstructionModal,
    onCloseInstructionModal,
    navigateToBodyWeightOnlyScreen,
    variations,
    navigateToBackScreen,
  };
};

export default useExercise;
