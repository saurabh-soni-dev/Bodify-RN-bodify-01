import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import color from '@theme/color';
import font from '@theme/font';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {analyticsTopTabs} from './analyticsTopTabs.const';

export type AnalyticsTopTabParams = {
  Overview: undefined;
  ProgramManagement: undefined;
  AnalyticsReferralManagement: undefined;
  AnalyticsFinancialManagement: undefined;
  TraineeManagement: undefined;
  UserManagement: undefined;
};
export type AnalyticsTopTabNavigationProps =
  MaterialTopTabNavigationProp<AnalyticsTopTabParams>;

const AnalyticsTopTabs: FC = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarScrollEnabled: true,
        tabBarAllowFontScaling: false,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarGap: 40,
      }}>
      {analyticsTopTabs?.map(tab => (
        <Tab.Screen
          key={tab?.id}
          name={tab?.name}
          component={tab?.component}
          options={tab?.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AnalyticsTopTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: color.primaryBG,
    height: 38,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: color.secondaryText,
  },
  tabBarItemStyle: {
    height: 38,
    width: 'auto',
    justifyContent: 'flex-start',
    margin: 0,
    paddingHorizontal: 0,
  },
  tabBarLabelStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: color.primaryText,
    textTransform: 'capitalize',
    padding: 0,
    margin: 0,
  },
  tabBarIndicatorStyle: {
    height: 4,
    backgroundColor: color.primary,
  },
});
