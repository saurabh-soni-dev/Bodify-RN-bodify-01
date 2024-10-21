import RootStack from '@navigation/stacks/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@utility/navigationServices';
import {FC} from 'react';
import SplashScreen from 'react-native-splash-screen';

const Route: FC = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => SplashScreen.hide()}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
