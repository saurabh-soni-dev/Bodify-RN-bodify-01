import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback } from 'react';

const usePackages = () => {
  const navigation = useAuthNavigation();

  //** Navigate to Create New programs screen */
  const onNavigateToCreateProgramScreen = useCallback(() => {
    navigation.navigate('CreateNewPackages');
  }, [navigation]);

  return {
    onNavigateToCreateProgramScreen,
  };
};

export default usePackages;
