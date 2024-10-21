import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import * as param from '@config/params';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {Log} from '@utility/log';
import {checkNumeric} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {WorkoutPlanErrorProps, WorkoutPlanStateProps} from './WorkoutPlan';

const useWorkoutPlan = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('WorkoutPlan');
  const {token} = useAppSelector(state => state.UserData);
  const isFocused = useIsFocused();
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlanStateProps>({
    programId: '',
    programName: '',
    paymentType: 'Fixed',
    amount: '',
    confirmationModal: false,
    selectedIndex: undefined,
    isLoading: false,
    programInfo: {
      programName: '',
      programDescription: '',
      videoTrailer: '',
      thumbnail: '',
      numberOfWeeks: 0,
      levelDifficulty: '',
      trainingType: '',
      muscles: [],
      equipment: [],
      weeks: [],
    },
    weeksDaysList: [],
    selectedWeeksDaysList: [],
    sessionList: [],
    initialVisibleWeeks: 0,
    amountTypeButtons: ['Fixed', 'Subscription'],
  });
  const [workoutPlanError, setWorkoutPlanError] =
    useState<WorkoutPlanErrorProps>({
      amountError: undefined,
    });
  const workoutText = {
    headerTitle: 'Yash’s amazing workout plan',
    packageHeaderTitle: 'Yash’s amazing package plan',
    viewAsUser: 'View as user',
    workoutInfo: 'Full body, Abs & Core, Booty, Arms, Resistance',
    workoutDetails: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse`,
    priceStructure: 'Price Structure',
    fixedPrice: 'Fixed Price',
    subscription: 'Subscription',
    priceInfo: `The price you set for your program or package is the amount that will be displayed to the potential buyers. However, this price is not the final amount that you will receive. The payment processor, our platform, and the tax authorities will deduct their respective fees and taxes from this price. You can learn more by checking our`,
    packageConfirmMessage:
      'Your package is now published. You can see the package on the program screen.',
    programConfirmMessage:
      'Your program is now published. You can see the program on the program screen.',
  };

  //** Update workout plan state  */
  const updateWorkoutPlanState = useCallback(<T>(key: string, value: T) => {
    setWorkoutPlan(prevState => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    if (
      isFocused &&
      params?.programId &&
      params?.programName &&
      workoutPlan?.programId !== params?.programId &&
      workoutPlan?.programName !== params?.programName
    ) {
      updateWorkoutPlanState('programId', params?.programId);
      updateWorkoutPlanState('programName', params?.programName);
      getPublishProgram(params?.programId);
    }
  }, [isFocused, params, updateWorkoutPlanState]);

  useEffect(() => {
    if (isFocused) {
      const weeksDaysList = Array.from(
        // {length: Number(workoutPlan?.selectedWeeksDaysList?.length ?? 3)},
        {length: Number(3)},
        (_, index) => ({
          id: index + 1,
          weekName: `Week ${index + 1}`,
          days: Array.from({length: 7}, (_, idx) => ({
            id: idx + 1,
            dayName: `${idx + 1}`,
            isSelected: false,
            isBorder: (idx % 2) - index == 0 ? true : false,
          })),
        }),
      );
      updateWorkoutPlanState('weeksDaysList', weeksDaysList);
    }
  }, [isFocused, updateWorkoutPlanState, workoutPlan?.selectedWeeksDaysList]);

  //** Get publish program information */
  const getPublishProgram = async (programId: string) => {
    try {
      const {data} = await axiosInstance.get(
        `${constant.publishProgram}${programId}`,
      );
      if (data) {
        const selectedWeekDays = data?.Weeks?.filter(item => {
          item?.Week, item?.Day;
        });
        const sessionList = data?.Weeks?.filter(item => {
          item?.Session?.map(session => session);
        });
        updateWorkoutPlanState('programInfo', data);
        updateWorkoutPlanState('selectedWeeksDaysList', selectedWeekDays);
        updateWorkoutPlanState('sessionList', sessionList);
      }
    } catch (error) {
      Log('getPublishProgram::', error);
    }
  };

  //** Integrate api for publish program */
  const onPublishProgram = async () => {
    updateWorkoutPlanState('isLoading', true);
    try {
      const formData = new URLSearchParams();
      const paymentType = workoutPlan?.paymentType ? 'Fixed' : 'Subscription';
      formData.append(param.default.paymentType, paymentType);
      formData.append(param.default.amount, workoutPlan?.amount);
      const {data} = await axiosInstance.put(
        `${constant.programsPublish}/${workoutPlan?.programId}`,
        formData.toString(),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateWorkoutPlanState('isLoading', false);
        updateWorkoutPlanState('confirmationModal', true);
      }
    } catch (error) {
      Log('onPublish error:: ', error);
      updateWorkoutPlanState('isLoading', false);
    }
  };

  //** Handle publish button active deactive */
  const isPublish = useMemo(() => !workoutPlan?.amount, [workoutPlan?.amount]);

  //** Validate publish program api */
  const validatePublishProgram = useCallback(() => {
    let tempError = {};
    if (!checkNumeric(workoutPlan.amount)) {
      tempError = {
        amountError: validationMessage.invalidAmount,
      };
    } else {
      tempError = {};
      onPublishProgram();
    }
    setWorkoutPlanError(tempError);
  }, [workoutPlan, workoutPlanError, validationMessage, onPublishProgram]);

  //** Expand View show and hide function */
  const onPressExpand = useCallback(
    (index: number) => {
      if (workoutPlan?.selectedIndex == index) {
        updateWorkoutPlanState('selectedIndex', undefined);
      } else {
        updateWorkoutPlanState('selectedIndex', index);
      }
    },
    [workoutPlan, updateWorkoutPlanState],
  );

  //** Navigate to Work out Details screen */
  const navigateToWorkOutDetails = useCallback(() => {
    if (params?.typeScreen == 'packages') {
      navigation.navigate('ProgramDetails');
    } else {
      navigation.navigate('WorkoutDetails');
    }
  }, [params, navigation]);

  //** Navigate to Work My Programs */
  const navigateToMyPrograms = useCallback(() => {
    updateWorkoutPlanState('confirmationModal', false);
    setTimeout(() => {
      navigation.navigate('MyPrograms');
    }, 500);
  }, [workoutPlan, updateWorkoutPlanState, navigation]);

  //** Handle price type */
  const onChangePaymentType = useCallback(
    (price: string) => {
      updateWorkoutPlanState('paymentType', price);
    },
    [updateWorkoutPlanState],
  );

  //** Update price */
  const onChangeAmount = useCallback(
    (amount: string) => {
      updateWorkoutPlanState('amount', amount);
    },
    [updateWorkoutPlanState],
  );

  return {
    workoutPlan,
    workoutPlanError,
    updateWorkoutPlanState,
    params,
    workoutText,
    isPublish,
    validatePublishProgram,
    navigateToWorkOutDetails,
    navigateToMyPrograms,
    onChangePaymentType,
    onChangeAmount,
  };
};

export default useWorkoutPlan;
