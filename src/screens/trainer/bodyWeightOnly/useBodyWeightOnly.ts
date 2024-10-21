import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import * as param from '@config/params';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';
import {checkName} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ExercisesProps} from 'src/components/card/bodyweightExercise/BodyweightExercise';
import {DaysProps} from '../programName/ProgramName';
import {BodyWeightOnlyErrorProps, BodyWeightOnlyProps} from './BodyWeightOnly';

const useBodyWeightOnly = () => {
  const navigation = useAuthNavigation();
  const {token} = useAppSelector(state => state.UserData);
  const {params} = useAuthRoute('BodyWeightOnly');
  const isFocused = useIsFocused();
  const refRBSheetTableSets = useRef<RBSheet>(null);
  const [bodyWeightOnlyState, setBodyWeightOnlyState] =
    useState<BodyWeightOnlyProps>({
      programId: '',
      programName: '',
      weeksDaysList: [],
      initialVisibleWeeks: 3,
      showAllWeeks: false,
      currentIndex: 0,
      weeklyId: '',
      sessionName: '',
      workoutIntroVideo: '',
      workoutSummaryVideo: '',
      isLoading: false,
      isBackLoading: false,
      selectedExercises: [],
      supersetAndCircuit: [],
      selectType: undefined,
      selectedWeekAndDay: [],
      setButtons: ['Superset', 'Circuit'],
      dataCount: 0,
      selectedType: 'Sets',
      selectedIndex: undefined,
      selectedSupersetIndex: undefined,
      paused: true,
      summaryPaused: true,
    });
  const [bodyWeightOnlyError, setBodyWeightOnlyError] =
    useState<BodyWeightOnlyErrorProps>({
      sessionNameError: undefined,
      exerciseError: undefined,
    });

  //** Update bodyweight only state values */
  const updateBodyWeightOnlyState = useCallback(<T>(key: string, value: T) => {
    setBodyWeightOnlyState(prevState => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    if (
      isFocused &&
      params?.numberOfWeeks &&
      JSON.stringify(params?.numberOfWeeks) !==
        JSON.stringify(bodyWeightOnlyState?.weeksDaysList) &&
      bodyWeightOnlyState?.dataCount == 0
    ) {
      const selectedDay = params?.numberOfWeeks?.filter(week =>
        week?.days?.some((day: DaysProps) => day?.isSelected),
      );
      const selectedWeekAndDay = selectedDay?.map(week => ({
        weekName: week?.weekName,
        dayName: week?.days?.find((day: DaysProps) => day?.isSelected)?.dayName,
      }));
      updateBodyWeightOnlyState('selectedWeekAndDay', selectedWeekAndDay);
      updateBodyWeightOnlyState('weeksDaysList', params?.numberOfWeeks);
      updateBodyWeightOnlyState('dataCount', 1);
    }
  }, [
    isFocused,
    params?.numberOfWeeks,
    bodyWeightOnlyState?.weeksDaysList,
    updateBodyWeightOnlyState,
  ]);

  useEffect(() => {
    if (
      isFocused &&
      params?.programId &&
      params?.programName &&
      params?.weeklyId &&
      bodyWeightOnlyState?.programId !== params?.programId &&
      bodyWeightOnlyState?.weeklyId !== params?.weeklyId &&
      bodyWeightOnlyState?.programName !== params?.programName
    ) {
      updateBodyWeightOnlyState('programId', params?.programId);
      updateBodyWeightOnlyState('programName', params?.programName);
      updateBodyWeightOnlyState('weeklyId', params?.weeklyId);
    }
  }, [
    isFocused,
    params?.programId,
    params?.weeklyId,
    updateBodyWeightOnlyState,
  ]);

  useEffect(() => {
    if (
      isFocused &&
      params?.selectedExercises &&
      params?.exerciseFlag == 'NewExercise' &&
      bodyWeightOnlyState?.dataCount == 0
    ) {
      const combinedExercises = [
        ...bodyWeightOnlyState.selectedExercises,
        ...params?.selectedExercises
          ?.filter(item => {
            const existingExercise = bodyWeightOnlyState.selectedExercises.find(
              ex => ex?.exercisesId === item?.exercisesId,
            );
            return !existingExercise;
          })
          .map(item => ({
            ...item,
            isSelected: false,
            defaultParametersSets: Number('3'),
            defaultParametersSetsType: 'Sets',
            defaultParametersReps: Number('120'),
            defaultParametersRepsType: 'Sec',
            restTime: Number('90'),
            restTimeType: 'Sec',
            coolDown: Number('90'),
            coolDownType: 'Sec',
          })),
      ];
      updateBodyWeightOnlyState('selectedExercises', combinedExercises);
      updateBodyWeightOnlyState('dataCount', 1);
    }
  }, [
    isFocused,
    params?.exerciseFlag,
    params?.selectedExercises,
    updateBodyWeightOnlyState,
  ]);

  useEffect(() => {
    if (
      isFocused &&
      params?.selectedExercises &&
      params?.exerciseFlag === 'FromSet' &&
      bodyWeightOnlyState?.dataCount == 0 &&
      bodyWeightOnlyState?.supersetAndCircuit !== params?.selectedExercises
    ) {
      const updatedExercises = [...bodyWeightOnlyState.supersetAndCircuit];
      if (params?.setIndex !== undefined) {
        if (updatedExercises[params?.setIndex]?.exercisesList) {
          const existingExercisesIds = updatedExercises[
            params?.setIndex
          ]?.exercisesList?.map(exercise => exercise?.exercisesId);
          const newExercises = params?.selectedExercises
            ?.filter(
              exercise =>
                !existingExercisesIds?.includes(exercise?.exercisesId),
            )
            .map(exercise => ({
              ...exercise,
              isSelected: true,
              defaultParametersSets: Number('3'),
              defaultParametersSetsType: 'Sets',
              defaultParametersReps: Number('120'),
              defaultParametersRepsType: 'Sec',
              restTime: Number('90'),
              restTimeType: 'Sec',
              coolDown: Number('90'),
              coolDownType: 'Sec',
            }));
          updatedExercises[params?.setIndex].exercisesList = [
            ...updatedExercises[params?.setIndex].exercisesList,
            ...newExercises,
          ];
        }
      }
      updateBodyWeightOnlyState('supersetAndCircuit', updatedExercises);
      updateBodyWeightOnlyState('dataCount', 1);
    }
  }, [
    isFocused,
    params?.exerciseFlag,
    params?.setIndex,
    params?.selectedExercises,
    updateBodyWeightOnlyState,
  ]);

  //** Get the week index which one day is selected  */
  const getSelectedWeekIndex = useMemo(() => {
    return bodyWeightOnlyState?.weeksDaysList?.findIndex(week =>
      week?.days?.some(day => day?.isSelected),
    );
  }, [bodyWeightOnlyState?.weeksDaysList]);

  useEffect(() => {
    updateBodyWeightOnlyState('currentIndex', getSelectedWeekIndex);
  }, [getSelectedWeekIndex]);

  //** Handle add new session button active inactive */
  const isAddNewSession = useMemo(
    () =>
      !(
        (bodyWeightOnlyState.sessionName &&
          bodyWeightOnlyState?.selectedExercises?.length > 0) ||
        bodyWeightOnlyState?.supersetAndCircuit?.length >= 1
      ),
    [bodyWeightOnlyState],
  );

  //** Handle disabled arrow show button */
  const isUpArrowDisabled = useMemo(
    () => bodyWeightOnlyState.currentIndex === 0,
    [bodyWeightOnlyState.currentIndex],
  );
  const isDownArrowDisabled = useMemo(
    () =>
      !(bodyWeightOnlyState?.weeksDaysList?.length > 3) ||
      bodyWeightOnlyState?.currentIndex ===
        bodyWeightOnlyState?.weeksDaysList?.length - 1,
    [bodyWeightOnlyState?.weeksDaysList, bodyWeightOnlyState?.currentIndex],
  );

  const isRemoveButton = useMemo(() => {
    const updatedSuperset = bodyWeightOnlyState?.supersetAndCircuit;
    if (updatedSuperset && updatedSuperset.length >= 1) {
      return updatedSuperset.every(current => {
        return current?.exercisesList?.every(exercise => !exercise?.isSelected);
      });
    }
    return true;
  }, [bodyWeightOnlyState?.supersetAndCircuit]);

  // if supersetAndCircuit is length >=2 and all index exerciselist all item are isSelected false then return false
  //** Chnage week of data index wise */
  const onChangeWeek = useCallback(
    (type: string) => {
      if (Keyboard) {
        Keyboard.dismiss();
      }
      switch (type) {
        case 'NextIndex':
          if (
            bodyWeightOnlyState?.currentIndex <
            bodyWeightOnlyState?.weeksDaysList?.length - 1
          ) {
            updateBodyWeightOnlyState(
              'currentIndex',
              bodyWeightOnlyState?.currentIndex + 1,
            );
          }
          break;
        case 'PrevIndex':
          if (bodyWeightOnlyState?.currentIndex > 0) {
            updateBodyWeightOnlyState(
              'currentIndex',
              bodyWeightOnlyState?.currentIndex - 1,
            );
          }
          break;
        default:
          break;
      }
    },
    [bodyWeightOnlyState],
  );

  //** Select week of day */
  const onSelectWeekOfDays = useCallback(
    (dayId: number, weekIndex: number, weekName: string) => {
      updateBodyWeightOnlyState('currentIndex', weekIndex);
      const updatedWeeks = bodyWeightOnlyState?.weeksDaysList?.map(
        (week, index) => {
          if (index === weekIndex) {
            return {
              ...week,
              days: week?.days?.map(day =>
                day?.id === dayId
                  ? {...day, isSelected: true}
                  : {...day, isSelected: false},
              ),
            };
          } else {
            return {
              ...week,
              days: week?.days?.map(day => ({...day, isSelected: false})),
            };
          }
        },
      );
      updateBodyWeightOnlyState('weeksDaysList', updatedWeeks);
      apiWeeklyDay(weekName, dayId);
      if (updatedWeeks) {
        const selectedDays = updatedWeeks?.filter(week =>
          week?.days?.some(day => day?.isSelected),
        );
        const result = selectedDays?.map(week => ({
          weekName: week?.weekName,
          dayName: week?.days?.find(day => day?.isSelected)?.dayName,
        }));
        updateBodyWeightOnlyState('selectedWeekAndDay', result);
      }
    },
    [bodyWeightOnlyState],
  );

  //** Start api integration for posting day of the week */
  const apiWeeklyDay = async (week: string, day: number) => {
    try {
      let tempWeek = week.split(' ')[1];
      const formData = {
        [param.default.day]: day,
        [param.default.week]: parseInt(tempWeek),
        [param.default.programId]: bodyWeightOnlyState?.programId,
      };
      const {data} = await axiosInstance.post(constant.weeklyDay, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        updateBodyWeightOnlyState('weeklyId', data?.weeklyId);
        if (data?.weeklyId) {
          validateCreateSession(2);
        }
      }
    } catch (error) {
      Log('Weekly day failed', error);
    }
  };
  //** End api integration for posting day of the week */

  //** Start Upload workout intro & summary videos */
  const uploadWorkoutVideo = useCallback(
    async (videoType: 'Intro' | 'Summary') => {
      const video = await ImageCropPicker.openPicker({
        mediaType: 'video',
        compressVideoPreset: 'HighestQuality',
      });
      const key =
        videoType === 'Intro' ? 'workoutIntroVideo' : 'workoutSummaryVideo';
      updateBodyWeightOnlyState(key, video?.path);
    },
    [bodyWeightOnlyState],
  );
  //** End Upload workout intro & summary videos */

  //** Navigate to exercise screen to select exercise */
  const navigateToNewExercise = useCallback(
    (exerciseFlag: 'NewExercise' | 'FromSet', index?: number) => {
      switch (exerciseFlag) {
        case 'NewExercise':
          navigation.navigate('Exercise', {
            flag: 'bodyWeightOnly',
            exerciseFlag,
            selectedExercises: bodyWeightOnlyState?.selectedExercises,
          });
          updateBodyWeightOnlyState('dataCount', 0);
          break;
        case 'FromSet':
          if (index !== undefined) {
            navigation.navigate('Exercise', {
              flag: 'bodyWeightOnly',
              exerciseFlag,
              setIndex: index,
              selectedExercises:
                bodyWeightOnlyState?.supersetAndCircuit[index]?.exercisesList,
            });
          }
          updateBodyWeightOnlyState('dataCount', 0);
          break;
        default:
          break;
      }
    },
    [bodyWeightOnlyState, navigation],
  );
  //** Start Create session api integration */
  const onCreateSession = async (from: number) => {
    if (from === 0) {
      updateBodyWeightOnlyState('isLoading', true);
    } else if (from == 1) {
      updateBodyWeightOnlyState('isBackLoading', true);
    }
    try {
      const exerciseWithSet = bodyWeightOnlyState?.supersetAndCircuit?.map(
        set => {
          let exerciseList = set?.exercisesList?.map(exercise => {
            return {
              exercisesId: exercise?.exercisesId,
              sets: exercise?.defaultParametersSets,
              reps: exercise?.defaultParametersReps,
              restTime: exercise?.restTime,
              coolDown: exercise?.coolDown,
            };
          });
          return {
            type: set?.type,
            exercise: exerciseList,
          };
        },
      );

      const exerciseOnly = bodyWeightOnlyState?.selectedExercises?.map(
        exercise => {
          return {
            exercisesId: exercise?.exercisesId,
            sets: exercise?.defaultParametersSets,
            reps: exercise?.defaultParametersReps,
            restTime: exercise?.restTime,
            coolDown: exercise?.coolDown,
          };
        },
      );
      const exercises =
        bodyWeightOnlyState?.selectType !== undefined
          ? exerciseWithSet
          : exerciseOnly;
      let formData = new FormData();
      if (bodyWeightOnlyState?.workoutIntroVideo) {
        formData.append(param.default.videoIntroOne, {
          name: 'video.mp4',
          uri: bodyWeightOnlyState?.workoutIntroVideo,
          type: 'video/mp4',
        });
      }
      if (bodyWeightOnlyState?.workoutSummaryVideo) {
        formData.append(param.default.videoIntroTwo, {
          name: 'video.mp4',
          uri: bodyWeightOnlyState?.workoutSummaryVideo,
          type: 'video/mp4',
        });
      }
      formData.append(
        param.default.data,
        JSON.stringify({
          exercises: exercises,
          programId: bodyWeightOnlyState?.programId,
          weeklyId: bodyWeightOnlyState?.weeklyId,
          sessionName: bodyWeightOnlyState?.sessionName,
        }),
      );
      Log('formData::', JSON.stringify(formData));
      const {data} = await axiosInstance.post(
        constant.sessionCreate,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      Toast('Session Created Successfully !!');
      updateBodyWeightOnlyState('isLoading', false);
      updateBodyWeightOnlyState('isBackLoading', false);
      updateBodyWeightOnlyState('sessionName', '');
      updateBodyWeightOnlyState('workoutIntroVideo', '');
      updateBodyWeightOnlyState('workoutSummaryVideo', '');
      updateBodyWeightOnlyState('selectedExercises', []);
      updateBodyWeightOnlyState('supersetAndCircuit', []);
      if (from == 1) {
        navigation.navigate('ProgramName', {
          numberOfWeeks: bodyWeightOnlyState?.weeksDaysList,
        });
        updateBodyWeightOnlyState('dataCount', 0);
      }
    } catch (error: any) {
      Log('create session failed', error);
      updateBodyWeightOnlyState('isLoading', false);
      updateBodyWeightOnlyState('isBackLoading', false);
    }
  };
  //** End Create session api integration */

  //** Start validate to Create session */
  const validateCreateSession = useCallback(
    (from: number = 0) => {
      let tempError = {};
      if (!checkName(bodyWeightOnlyState?.sessionName)) {
        tempError = {
          sessionNameError: validationMessage.emptySessionName,
        };
      } else {
        if (bodyWeightOnlyState?.supersetAndCircuit?.length >= 1) {
          tempError = {};
          onCreateSession(from);
        } else {
          if (bodyWeightOnlyState?.selectedExercises?.length < 1) {
            tempError = {
              exerciseError: validationMessage.emptyExercise,
            };
          } else {
            tempError = {};
            onCreateSession(from);
          }
        }
      }
      setBodyWeightOnlyError(tempError);
    },
    [
      bodyWeightOnlyState,
      bodyWeightOnlyError,
      validationMessage,
      onCreateSession,
    ],
  );
  //** End validate to Create session */

  //** Save session data on back navigation */
  const onPressBack = useCallback(() => {
    if (Keyboard) {
      Keyboard.dismiss();
    }
    updateBodyWeightOnlyState('dataCount', 0);
    validateCreateSession(1);
  }, [bodyWeightOnlyState, validateCreateSession, navigation]);

  //** Upload exercise video */
  const onUploadExerciseVideo = useCallback(
    async (
      from: 'Set' | 'NewExercise',
      item: ExercisesProps,
      index?: number,
    ) => {
      const exerciseVideo = await ImageCropPicker.openPicker({
        mediaType: 'video',
        compressVideoPreset: 'HighestQuality',
      });
      if (!exerciseVideo || !item || index === undefined) return;
      const {
        title,
        defaultParametersSets,
        defaultParametersReps,
        tags,
        type,
        equipment,
        mainMuscle,
        secondaryMuscle,
        trainerInstructions,
      } = item;
      try {
        const formData = new FormData();
        formData.append(param.default.videoExercise, {
          name: 'video.mp4',
          uri: exerciseVideo.path,
          type: 'video/mp4',
        });
        formData.append(
          param.default.data,
          JSON.stringify({
            title: title,
            defaultParametersSets: defaultParametersSets,
            defaultParametersReps: defaultParametersReps,
            type: type,
            tags: tags,
            equipment: equipment,
            mainMuscle: mainMuscle,
            secondaryMuscle: secondaryMuscle,
            trainerInstructions: trainerInstructions,
          }),
        );
        const {data} = await axiosInstance.post(
          constant.createExercise,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        if (data) {
          Toast(data?.message);
          if (from === 'NewExercise') {
            const tempExercise = [...bodyWeightOnlyState?.selectedExercises];
            tempExercise.splice(index, 0, data);
            updateBodyWeightOnlyState('selectedExercises', tempExercise);
          }
          if (from === 'Set') {
            const tempSetExercise = [
              ...bodyWeightOnlyState?.supersetAndCircuit,
            ];
            const exercisesList = tempSetExercise[index]?.exercisesList;
            exercisesList?.splice(index, 0, data);
            updateBodyWeightOnlyState('supersetAndCircuit', tempSetExercise);
          }
        }
      } catch (error: any) {
        Toast(error?.response?.data?.message);
      }
    },
    [bodyWeightOnlyState, updateBodyWeightOnlyState],
  );

  //** Create Superset & Circuit */
  const onCreateSupersetAndCircuit = useCallback(
    (type: string) => {
      let temp = [...bodyWeightOnlyState?.supersetAndCircuit];
      let tempExerciseList = [...bodyWeightOnlyState?.selectedExercises];
      let tempExercise = tempExerciseList
        ?.filter(item => item?.isSelected)
        .map(item => {
          return {
            ...item,
          };
        });
      temp.push({
        exercisesList: tempExercise,
        type: type,
        isSetEnable: true,

        isSet: true,
      });
      tempExerciseList = tempExerciseList?.filter(
        i => !tempExercise?.some(j => j?.exercisesId === i?.exercisesId),
      );
      updateBodyWeightOnlyState('supersetAndCircuit', temp);
      updateBodyWeightOnlyState('selectedExercises', tempExerciseList);
      updateBodyWeightOnlyState('selectType', type);
    },
    [bodyWeightOnlyState, updateBodyWeightOnlyState],
  );

  //** Remove Superset & Circuit */
  const onRemoveSupersetAndCircuit = useCallback(
    (items: Array<number>) => {
      const newSelectedExercises = [...bodyWeightOnlyState?.selectedExercises];
      const newSupersetAndCircuit =
        bodyWeightOnlyState?.supersetAndCircuit?.filter((sup, index) => {
          if (!items.includes(index)) {
            return true;
          }
          const isSelected = sup?.exercisesList?.every(
            item => item?.isSelected,
          );
          if (isSelected) {
            sup?.exercisesList?.forEach(exercise => {
              if (
                !newSelectedExercises?.some(
                  item => item?.exercisesId === exercise?.exercisesId,
                )
              ) {
                newSelectedExercises?.unshift(exercise);
              }
            });
          }
          return false;
        });
      updateBodyWeightOnlyState('supersetAndCircuit', newSupersetAndCircuit);
      updateBodyWeightOnlyState('selectedExercises', newSelectedExercises);
    },
    [bodyWeightOnlyState, updateBodyWeightOnlyState],
  );

  //** Start Select exercise for Creating Supersets & Circuit And Remove Superset & Circuit */
  const onSelectExercise = useCallback(
    (
      type: 'Exercise' | 'Set',
      exercisesId?: string,
      exerciseIndex?: number,
      setIndex?: number,
    ) => {
      switch (type) {
        case 'Exercise':
          const updatedExercise = bodyWeightOnlyState?.selectedExercises?.map(
            exercise => {
              if (exercise?.exercisesId === exercisesId) {
                const updatedExercise = {
                  ...exercise,
                  isSelected: !exercise.isSelected,
                };
                return updatedExercise;
              }
              return exercise;
            },
          );
          updateBodyWeightOnlyState('selectedExercises', updatedExercise);
          break;
        case 'Set':
          if (setIndex === undefined) return;
          const {supersetAndCircuit} = bodyWeightOnlyState;
          const selectedSuperset = supersetAndCircuit[setIndex];
          if (selectedSuperset?.exercisesList?.length <= 1) {
            updateBodyWeightOnlyState('selectType', undefined);
          }
          const isAllUnSelected = selectedSuperset?.exercisesList?.every(
            exercise => !exercise?.isSelected,
          );
          if (supersetAndCircuit?.length > 1 && isAllUnSelected) {
            const uniqueTypes = [
              ...new Set(supersetAndCircuit?.map(item => item?.type)),
            ];
            if (uniqueTypes?.length === 1) {
              if (uniqueTypes[0] === 'Circuit') {
                Alert.alert(
                  'You cannot select multiple Circuits at the same time.',
                );
              } else if (uniqueTypes[0] === 'Superset') {
                Alert.alert(
                  'You cannot select multiple Supersets at the same time.',
                );
              }
            } else {
              Alert.alert(
                'You cannot select Superset & Circuit at the same time.',
              );
            }
            return;
          }
          const updatedSupersetAndCircuit = supersetAndCircuit.map(
            (circuit, circuitKey) => {
              if (circuitKey === setIndex) {
                return {
                  ...circuit,
                  exercisesList: circuit.exercisesList.map(
                    (exercise, index) => {
                      if (index === exerciseIndex) {
                        return {...exercise, isSelected: !exercise.isSelected};
                      }
                      return exercise;
                    },
                  ),
                };
              }
              return circuit;
            },
          );
          updateBodyWeightOnlyState(
            'supersetAndCircuit',
            updatedSupersetAndCircuit,
          );
          break;
        default:
          break;
      }
    },
    [bodyWeightOnlyState, updateBodyWeightOnlyState],
  );
  //** End Select exercise for Creating Supersets & Circuit And Remove Superset & Circuit */

  //** Start Delete exercise from selected exercise And Superset & Circuit */
  const onDeleteExercise = useCallback(
    (
      type: 'Exercise' | 'Set',
      exercisesId?: string,
      exerciseIndex?: number,
      setIndex?: number,
    ) => {
      switch (type) {
        case 'Exercise':
          const updatedExercise =
            bodyWeightOnlyState?.selectedExercises?.filter(
              exercise => exercise.exercisesId !== exercisesId,
            );
          updateBodyWeightOnlyState('selectedExercises', updatedExercise);
          break;
        case 'Set':
          if (setIndex !== undefined && exerciseIndex !== undefined) {
            if (
              bodyWeightOnlyState?.supersetAndCircuit[setIndex]?.exercisesList
                ?.length <= 1
            ) {
              updateBodyWeightOnlyState('selectType', undefined);
            }
            if (
              bodyWeightOnlyState?.supersetAndCircuit[setIndex]?.exercisesList
                ?.length == 1
            ) {
              let temp = [...bodyWeightOnlyState?.supersetAndCircuit];
              temp.splice(setIndex, 1);
              updateBodyWeightOnlyState('supersetAndCircuit', temp);
            } else {
              let temp = [
                ...bodyWeightOnlyState?.supersetAndCircuit[setIndex]
                  .exercisesList,
              ];
              temp.splice(exerciseIndex, 1);

              if (bodyWeightOnlyState?.supersetAndCircuit[setIndex]) {
                bodyWeightOnlyState.supersetAndCircuit[setIndex].exercisesList =
                  temp;
              }
              updateBodyWeightOnlyState('supersetAndCircuit', [
                ...bodyWeightOnlyState?.supersetAndCircuit,
              ]);
            }
          }
          break;
        default:
          break;
      }
    },
    [bodyWeightOnlyState, updateBodyWeightOnlyState],
  );
  //** End Delete exercise from selected exercise And Superset & Circuit */

  //** Update supersetAndCircuit data on drag item  */
  const onDragEnd = (data: ExercisesProps[], index: number) => {
    const updatedSupersetAndCircuit = [
      ...bodyWeightOnlyState.supersetAndCircuit,
    ];
    if (index >= 0 && index < updatedSupersetAndCircuit.length) {
      updatedSupersetAndCircuit[index] = {
        ...updatedSupersetAndCircuit[index],
        exercisesList: data,
      };
      updateBodyWeightOnlyState(
        'supersetAndCircuit',
        updatedSupersetAndCircuit,
      );
    }
  };

  //** Open bottom sheet to selected Sets, Metric, Rest time, Cool down */
  const openBottomSheet = (
    type: string,
    index?: number,
    supersetIndex?: number,
  ) => {
    refRBSheetTableSets?.current?.open();
    updateBodyWeightOnlyState('selectedType', type);
    updateBodyWeightOnlyState('selectedIndex', index);
    updateBodyWeightOnlyState('selectedSupersetIndex', supersetIndex);
  };
  const getParameterKey = (
    type: 'Sets' | 'Reps' | 'restTime' | 'coolDown',
    from: 'Value' | 'Type',
  ): string => {
    const keyMap: Record<string, Record<string, string>> = {
      Sets: {Value: 'defaultParametersSets', Type: 'defaultParametersSetsType'},
      Reps: {Value: 'defaultParametersReps', Type: 'defaultParametersRepsType'},
      restTime: {Value: 'restTime', Type: 'restTimeType'},
      coolDown: {Value: 'coolDown', Type: 'coolDownType'},
    };
    return keyMap[type][from];
  };

  //** Update the value of Sets, Metric, Rest time, Cool down */
  const onSelectSetsMetric = (
    data: string,
    type: 'Sets' | 'Reps' | 'restTime' | 'coolDown',
    from: 'Value' | 'Type',
    superset: number,
  ) => {
    let parameterKey = getParameterKey(type, from);
    const {
      selectedIndex,
      selectedSupersetIndex,
      supersetAndCircuit,
      selectedExercises,
    } = bodyWeightOnlyState;

    if (selectedIndex === undefined) return;
    if (superset === 1 && selectedSupersetIndex !== undefined) {
      const updatedExercises = JSON.parse(JSON.stringify(supersetAndCircuit));
      const exercise =
        updatedExercises[selectedSupersetIndex]?.exercisesList[selectedIndex];
      if (exercise) {
        exercise[parameterKey] = data;
        updateBodyWeightOnlyState('supersetAndCircuit', updatedExercises);
      }
    } else if (superset === 0) {
      const updatedExercises = [...selectedExercises];
      const exercise = updatedExercises[selectedIndex];
      if (exercise) {
        exercise[parameterKey] = data;
        updateBodyWeightOnlyState('selectedExercises', updatedExercises);
      }
    }
  };

  return {
    bodyWeightOnlyState,
    bodyWeightOnlyError,
    updateBodyWeightOnlyState,
    isAddNewSession,
    isUpArrowDisabled,
    isDownArrowDisabled,
    onChangeWeek,
    onSelectWeekOfDays,
    uploadWorkoutVideo,
    navigateToNewExercise,
    validateCreateSession,
    onPressBack,
    onCreateSupersetAndCircuit,
    onUploadExerciseVideo,
    onRemoveSupersetAndCircuit,
    onSelectExercise,
    onDeleteExercise,
    isRemoveButton,
    onDragEnd,
    refRBSheetTableSets,
    openBottomSheet,
    onSelectSetsMetric,
  };
};

export default useBodyWeightOnly;
