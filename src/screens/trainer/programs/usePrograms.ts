import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback } from 'react';

const usePrograms = () => {
  const navigation = useAuthNavigation();

  //** Navigate to programs details screen */
  const onNavigateToProgramsDetailsScreen = useCallback(() => {
    // navigation.navigate('ProgramDetails');
    navigation.navigate('WorkoutPlan', {
      typeScreen: 'packages'
    });
  }, [navigation]);
  return {
    onNavigateToProgramsDetailsScreen,
  };
};

export default usePrograms;
