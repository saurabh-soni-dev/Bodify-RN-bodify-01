import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {useCallback, useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';
import Video from 'react-native-video';

const useSplash = () => {
  const navigation = useAuthNavigation();
  const {step} = useAppSelector((state: RootState) => state?.UserData);
  const appState = useRef(AppState.currentState);
  const videoRef = useRef<Video>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  }, [isFocused]);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setIsMuted(false);
      } else {
        setIsMuted(true);
      }
      appState.current = nextAppState;
    });
    return () => {
      subscription.remove();
    };
  }, [navigation]);

  //** Start navigate to signup screen based on previous signup record */
  const navigateToCreateAccountScreen = useCallback(() => {
    switch (step) {
      case 1:
        navigation.navigate('CreateAccount');
        break;
      case 2:
        navigation.navigate('AccountType');
        break;
      case 3:
        navigation.navigate('TellUsMore');
        break;
      default:
        navigation.navigate('SignUp');
        break;
    }
  }, [step]);
  //** End navigate to signup screen based on previous signup record */

  //** Start Navigate to login screen */
  const navigateToLoginScreen = useCallback(() => {
    navigation.navigate('Login');
  }, []);
  //** End Navigate to login screen */

  return {
    videoRef,
    isMuted,
    navigateToCreateAccountScreen,
    navigateToLoginScreen,
  };
};
export default useSplash;
