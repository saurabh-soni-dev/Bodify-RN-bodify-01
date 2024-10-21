import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { WorkoutDetailsProps } from './WorkoutDetails';
import { reviewsList } from './workoutDetails.const';


const useWorkoutDetails = () => {
  const navigation = useAuthNavigation();
  const [workOutDetails, setWorkOutDetails] = useState<WorkoutDetailsProps>({
    reviewsList,
  });
  //** Navigates back to the workoutPlan  screen. */
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    onGoBack,
    workOutDetails,
  };
};

export default useWorkoutDetails;
