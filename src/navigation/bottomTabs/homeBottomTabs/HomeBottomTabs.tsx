import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RootState} from '@redux/store';
import React, {FC, useMemo} from 'react';
import {useSelector} from 'react-redux';
import CustomHomeBottomTabs from './CustomHomeBottomTabs';
import {homeBottomTabs} from './homeBottomTabs.const';

const Tab = createBottomTabNavigator();
export type BottomTabStackParamList = {
  MyProgram: undefined;
  Financials: undefined;
  Analytics: undefined;
  MarketPlace: undefined;
  Workout: undefined;
  History: undefined;
  MyProfile: undefined;
  Settings: undefined;
};
export type BottomTabNavigationProps =
  BottomTabNavigationProp<BottomTabStackParamList>;
interface HomeBottomTabsProps {
  navigation: BottomTabNavigationProps;
}

const HomeBottomTabs: FC<HomeBottomTabsProps> = () => {
  //** Get usetype */
  const {typeUser} = useSelector((state: RootState) => state?.UserData);
  const getInitialRouteName = () => {
    return typeUser === 'Instruct' ? 'MyProgram' : 'MarketPlace';
  };
  //** Set initial tab name based on user */
  const initialRouteName = useMemo(() => {
    return getInitialRouteName();
  }, []);

  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <CustomHomeBottomTabs {...props} />}
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      {homeBottomTabs?.map(screen => (
        <Tab.Screen
          key={screen?.id}
          name={screen?.name}
          component={screen?.component}
        />
      ))}
    </Tab.Navigator>
  );
};
export default HomeBottomTabs;
