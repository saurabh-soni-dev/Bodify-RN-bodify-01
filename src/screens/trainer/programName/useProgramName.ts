import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import * as param from '@config/params';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {Log} from '@utility/log';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ProgramNameProps, valueTypes} from './ProgramName';

const useProgramName = () => {
  const navigation = useAuthNavigation();
  const {token} = useAppSelector(state => state.UserData);
  const {params} = useAuthRoute('ProgramName');
  const isFocused = useIsFocused();
  const refRBSheet = useRef<RBSheet>(null);
  const [programName, setProgramName] = useState<ProgramNameProps>({
    programInfo: {},
    weeksDaysList: [],
    currentIndex: 0,
    showAllWeeks: false,
    isCreateSession: false,
    weeklyId: '',
    weeklyData: [],
    selectedDay: '',
    selectedWeek: '',
    dataCount: 0,
  });

  //** Update program state values */
  const updateProgramNameState = useCallback(
    (key: keyof ProgramNameProps, value: valueTypes) => {
      setProgramName(prevState => ({...prevState, [key]: value}));
    },
    [],
  );

  //** Start api integration for getting session list */
  const apiGetWeekly = useCallback(
    async (programId: string, weeklyId: string, dayId: number) => {
      try {
        const {data} = await axiosInstance.get(
          `${constant.weekly}/${programId}/${weeklyId}/${dayId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (data) {
          updateProgramNameState('weeklyData', data[0]?.sessions);
        }
      } catch (error) {
        Log('Error getting weekly data:', error);
      }
    },
    [token, updateProgramNameState],
  );

  useEffect(() => {
    if (
      isFocused &&
      params?.programId &&
      programName?.programInfo?.programId !== params?.programId
    ) {
      updateProgramNameState('programInfo', params);
    }
  }, [isFocused, params?.programId, updateProgramNameState]);

  useEffect(() => {
    if (isFocused && params?.lengthOfWeeks) {
      const weeksDaysList = Array.from(
        {length: Number(params?.lengthOfWeeks ?? 3)},
        (_, index) => ({
          id: index + 1,
          weekName: `Week ${index + 1}`,
          days: Array.from({length: 7}, (_, idx) => ({
            id: idx + 1,
            dayName: `${idx + 1}`,
            isSelected: false,
          })),
        }),
      );
      updateProgramNameState('weeksDaysList', weeksDaysList);
    }
  }, [isFocused, params?.lengthOfWeeks, updateProgramNameState]);

  useEffect(() => {
    if (
      isFocused &&
      params?.numberOfWeeks &&
      JSON.stringify(programName.weeksDaysList) !==
        JSON.stringify(params?.numberOfWeeks) &&
      programName?.dataCount == 0
    ) {
      if (programName?.weeksDaysList) {
        const selectedDay = programName?.weeksDaysList
          .find(week => week?.days.find(day => day?.isSelected))
          ?.days.find(day => day?.isSelected)?.dayName;
        if (
          selectedDay &&
          programName?.programInfo?.programId &&
          programName?.weeklyId
        ) {
          apiGetWeekly(
            programName?.programInfo?.programId,
            programName?.weeklyId,
            Number(selectedDay),
          );
          updateProgramNameState('selectedDay', selectedDay);
        }
      }
      updateProgramNameState('weeksDaysList', params?.numberOfWeeks);
      updateProgramNameState('dataCount', 1);
      updateProgramNameState('isCreateSession', true);
    }
  }, [
    isFocused,
    params?.numberOfWeeks,
    programName?.programInfo?.programId,
    programName?.weeklyId,
    programName?.isCreateSession,
    updateProgramNameState,
  ]);

  useEffect(() => {
    if (
      isFocused &&
      programName?.weeklyId &&
      programName?.programInfo?.programId
    ) {
      apiGetWeekly(
        programName?.programInfo?.programId,
        programName?.weeklyId,
        Number(programName?.selectedDay),
      );
    }
  }, [
    isFocused,
    programName?.weeklyId,
    programName?.programInfo?.programId,
    apiGetWeekly,
  ]);

  //** Handle disabled review button */
  const isReviewButton = useMemo(
    () => !!programName?.weeklyData?.length,
    [programName.weeklyData],
  );

  //** Handle disabled arrow show button */
  const isUpArrowDisabled = useMemo(
    () => programName.currentIndex === 0,
    [programName.currentIndex],
  );
  const isDownArrowDisabled = useMemo(
    () => programName?.currentIndex >= programName?.weeksDaysList?.length - 3,
    [programName?.currentIndex, programName?.weeksDaysList?.length],
  );

  //** Select week of day */
  const onSelectWeekOfDays = useCallback(
    (dayId: number, weekIndex: number, weekName: string, weekId?: number) => {
      const getIndex = programName?.weeksDaysList?.findIndex(
        item => item?.weekName === weekName,
      );
      updateProgramNameState('weeklyData', []);
      updateProgramNameState('selectedDay', dayId);
      updateProgramNameState('selectedWeek', weekId || '');
      updateProgramNameState('isCreateSession', true);
      const updatedWeeks = programName.weeksDaysList?.map((week, index) => {
        if (index === getIndex) {
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
      });
      updateProgramNameState('weeksDaysList', updatedWeeks);
      apiWeeklyDay(weekName, dayId);
    },
    [programName.weeksDaysList, updateProgramNameState],
  );

  //** Chnage week of data index wise */
  const onChangeWeek = useCallback(
    (type: string) => {
      switch (type) {
        case 'NextIndex':
          if (
            programName?.currentIndex <
            programName?.weeksDaysList?.length - 1
          ) {
            updateProgramNameState(
              'currentIndex',
              programName?.currentIndex + 3,
            );
          }
          break;
        case 'PrevIndex':
          if (programName?.currentIndex > 0) {
            updateProgramNameState(
              'currentIndex',
              programName?.currentIndex - 3,
            );
          }
          break;
        default:
          break;
      }
    },
    [programName, updateProgramNameState],
  );
  const onSave = () => {
    navigation.navigate('MyPrograms');
  };
  //** Start api integration for posting day of the week */
  const apiWeeklyDay = async (week: string, day: number) => {
    try {
      let tempWeek = week.split(' ')[1];
      const formData = {
        [param.default.day]: day,
        [param.default.week]: parseInt(tempWeek),
        [param.default.programId]: programName?.programInfo?.programId,
      };
      const {data} = await axiosInstance.post(constant.weeklyDay, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        updateProgramNameState('weeklyId', data?.weeklyId);
        if (data?.weeklyId && programName?.programInfo?.programId) {
          apiGetWeekly(
            programName?.programInfo?.programId,
            data?.weeklyId,
            day,
          );
        }
      }
    } catch (error) {}
  };
  //** End api integration for posting day of the week */

  //** Open bottom sheet for edit duplicate etc */
  const openBottomSheet = useCallback(() => {
    refRBSheet.current?.open();
  }, []);

  //** Navigate to BodyWeightOnly screen */
  const navigateToBodyWeightOnly = useCallback(() => {
    navigation.navigate('BodyWeightOnly', {
      programId: programName?.programInfo?.programId,
      programName: programName?.programInfo?.programsName,
      weeklyId: programName?.weeklyId,
      day: Number(programName?.selectedDay),
      numberOfWeeks: programName?.weeksDaysList,
    });
    updateProgramNameState('dataCount', 0);
    updateProgramNameState('isCreateSession', false);
  }, [
    navigation,
    programName.programInfo.programId,
    programName.weeklyId,
    programName.selectedDay,
    programName.weeksDaysList,
    updateProgramNameState,
  ]);

  //** Navigate to Duplicate session screen */
  const navigateToDuplicateSession = useCallback(() => {
    refRBSheet?.current?.close();
    navigation.navigate('DuplicateSession');
  }, [navigation]);

  // Navigate to workout plan screen
  const navigateToWorkoutPlanScreen = useCallback(() => {
    navigation.navigate('WorkoutPlan', {
      programId: programName.programInfo.programId,
      programName: programName?.programInfo?.programsName,
    });
  }, [navigation, programName.programInfo.programId]);

  return {
    programName,
    refRBSheet,
    onChangeWeek,
    onSelectWeekOfDays,
    openBottomSheet,
    navigateToBodyWeightOnly,
    navigateToDuplicateSession,
    isReviewButton,
    isUpArrowDisabled,
    isDownArrowDisabled,
    updateProgramNameState,
    navigateToWorkoutPlanScreen,
    onSave,
  };
};

export default useProgramName;
