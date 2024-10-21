import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { CreateNewPackagesStateProps } from './CreateNewPackages';

const useCreateNewPackages = () => {
  const navigation = useAuthNavigation();
  const [createNewPackages, setCreateNewPackages] = useState<CreateNewPackagesStateProps>({
    packageName: '',
    packageDescription: '',
  });

  //** Handles the change of state values */
  const updateInputCreatePackageValue = useCallback(
    (key: string, value: string | boolean) => {
      setCreateNewPackages(prevState => ({ ...prevState, [key]: value }));
    },
    [createNewPackages],
  );

  //** Navigate to programs screen */
  const onNavigateToProgramsScreen = useCallback(() => {
    navigation.navigate('Programs');
  }, []);

  //** Navigate to Workout Plan screen */
  const onNavigateToWorkOutPlanScreen = useCallback(() => {
    navigation.navigate('WorkoutPlan', {
      typeScreen: 'packages'
    });
  }, []);

  return {
    onNavigateToProgramsScreen,
    onNavigateToWorkOutPlanScreen,
    updateInputCreatePackageValue,
    createNewPackages
  };
};

export default useCreateNewPackages;
