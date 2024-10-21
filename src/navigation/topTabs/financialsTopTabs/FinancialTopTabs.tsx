import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import React, { FC } from 'react';
import CustomFinancialTopTabs from './CustomFinancialTopTabs';
import { topTabs } from './financialTopTabs.const';

export type FinancialTopTabParams = {
  FinancialManagement: undefined;
  ReferralManagement: undefined;
};
export type FinancialTopTabNavigationProps =
  MaterialTopTabNavigationProp<FinancialTopTabParams>;

const FinancialsTopTabs: FC = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <CustomFinancialTopTabs {...props} />}>
      {topTabs?.map(tab => (
        <Tab.Screen key={tab?.id} name={tab?.name} component={tab?.component} />
      ))}
    </Tab.Navigator>
  );
};
export default FinancialsTopTabs;
