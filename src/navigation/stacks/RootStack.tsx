import {useAppSelector} from '@hooks/useRedux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootState} from '@redux/store';
import {FC, useMemo} from 'react';
import {stackScreens} from './rootStack.const';
import {RootStackParams} from './rootStackParams';
import color from '@theme/color';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack: FC = () => {
  const {isLogin} = useAppSelector((state: RootState) => state?.UserData);

  //** Handle initial screen  */
  const getInitialRouteName = () => {
    return isLogin ? 'HomeBottomTabs' : 'Splash';
  };
  const initialRouteName = useMemo(() => getInitialRouteName(), [isLogin]);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        statusBarAnimation: 'fade',
        presentation: 'card',
        orientation: 'portrait',
        navigationBarColor: color.secondaryBG,
      }}>
      {stackScreens?.map(screen => (
        <Stack.Screen
          key={screen?.name}
          name={screen?.name as keyof RootStackParams}
          component={screen?.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;
