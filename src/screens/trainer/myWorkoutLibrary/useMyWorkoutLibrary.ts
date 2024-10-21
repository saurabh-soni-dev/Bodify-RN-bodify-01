import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {useCallback, useEffect, useState} from 'react';
import {
  FilterDataItem,
  MyWorkoutLibraryProps,
  workoutListProps,
} from './MyWorkoutLibrary';

const useMyWorkoutLibrary = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('MyWorkoutLibrary');
  const isFocused = useIsFocused();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [workoutLibrary, setWorkoutLibrary] = useState<MyWorkoutLibraryProps>({
    workoutList: [],
    filteredWorkoutList: [],
    showSelectedCardDetails: false,
    showDeleteModal: false,
    selectedIndex: undefined,
    isLoading: false,
    selectedExercise: {},
    searchedExercise: '',
    exerciseVideo: {
      uri: '',
      headers: {
        Authorization: '',
      },
    },
  });
  const workoutLibraryText = {
    screenTitle: `My Workout Library`,
    searchBarPlaceholder: `Search Exercises`,
    bannerTitle: 'Back Squat',
    instructionTitle: `Coach Instructions`,
    emptyInstruction: `Select an exercise to view it, or\nclick on the “+” button to\nanother exercise to your library`,
    modalTitle: `Delete Exercise`,
    modalDescription: `Are you sure you want to delete Back\nSquats? You will lose it’s data`,
    cancelLabel: 'Cancel',
    confirmLabel: 'Yes',
  };

  useEffect(() => {
    if (isFocused) {
      updateWorkoutLibraryState('isLoading', true);
      onGetExercise();
    }
  }, [isFocused]);

  //** Update state values */
  const updateWorkoutLibraryState = useCallback(<T>(key: string, value: T) => {
    setWorkoutLibrary(prevState => ({...prevState, [key]: value}));
  }, []);

  //** Handle card selection */
  const onSelectWorkout = useCallback(
    (index: number, item: workoutListProps) => {
      updateWorkoutLibraryState('selectedExercise', item);
      updateWorkoutLibraryState('showSelectedCardDetails', true);
      updateWorkoutLibraryState('selectedIndex', index);
      if (item?.videoId) {
        getExerciseVideo(item?.videoId);
      }
    },
    [updateWorkoutLibraryState],
  );

  //** Navigate to Add New Exercise Screen */
  const onNavigationToAddNewExercise = () => {
    navigation.navigate('NewExercise');
  };

  //** start my workout library list getting api call */
  const onGetExercise = async () => {
    try {
      const {data} = await axiosInstance.get(`${constant?.exercises}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        let filteredExercises = data;
        //** start multi filter data conditions */
        if (
          params?.filterData &&
          (params?.filterData?.mainMuscle?.length > 0 ||
            params?.filterData?.type?.length > 0)
        ) {
          const {mainMuscle, type} = params?.filterData;
          const typeData = type?.map(item => item.title);
          const mainMuscleMap = mainMuscle?.map(item => item?.title);
          filteredExercises = data?.filter((item: FilterDataItem) => {
            return (
              mainMuscleMap?.includes(item?.mainMuscle) ||
              typeData?.includes(item?.type)
            );
          });
        }
        //** end multi filter data conditions */
        updateWorkoutLibraryState('workoutList', filteredExercises);
        updateWorkoutLibraryState('filteredWorkoutList', filteredExercises);
        updateWorkoutLibraryState('isLoading', false);
      }
    } catch (error: any) {
      updateWorkoutLibraryState('isLoading', false);
    }
  };
  //** End my workout library list getting api call */

  //** start Navigate to Library filter screen */
  const navigateToFilterScreen = () => {
    if (params?.filterData) {
      navigation.navigate('Filters', {
        filterScreenType: 'myLibrary',
        filterDataPass: params?.filterData,
      });
    }
  };

  //** Handle referral item search */
  const onSearchExercise = useCallback(
    (text: string) => {
      updateWorkoutLibraryState('searchedExercise', text);
      const filteredList = workoutLibrary?.filteredWorkoutList?.filter(item => {
        return item?.trainerInstructions
          ?.toLowerCase()
          ?.includes(text?.toLowerCase());
      });
      updateWorkoutLibraryState('workoutList', filteredList);
    },
    [workoutLibrary, updateWorkoutLibraryState],
  );

  //** Start Exercise video getting api call */
  const getExerciseVideo = (videoId: string) => {
    if (videoId) {
      const exerciseVideo = {
        uri: `${constant.baseURL}${constant.exerciseVideo}${videoId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      updateWorkoutLibraryState('exerciseVideo', exerciseVideo);
    }
  };
  //** End Exercise video getting api call */

  return {
    workoutLibrary,
    workoutLibraryText,
    updateWorkoutLibraryState,
    onSelectWorkout,
    onNavigationToAddNewExercise,
    navigateToFilterScreen,
    onSearchExercise,
  };
};

export default useMyWorkoutLibrary;
