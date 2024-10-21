import { useAuthNavigation } from "@hooks/useAppNavigation";
import { useCallback } from "react";

const useProgramDetails = () => {
  const navigation = useAuthNavigation();

  //** Navigates back to the workoutPlan Packages screen. */
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return {
    onGoBack
  };
};

export default useProgramDetails;
