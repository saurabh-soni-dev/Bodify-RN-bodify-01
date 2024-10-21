import MyProgramStack from '@navigation/stacks/myProgramStack/MyProgramStack';
import MyProfile from '@screens/myProfile/MyProfile';
import Settings from '@screens/settings/Settings';
import History from '@screens/trainee/history/History';
import MarketPlace from '@screens/trainee/marketPlace/MarketPlace';
import Workout from '@screens/trainee/workout/Workout';
import Analytics from '@screens/trainer/analytics/Analytics';
import Financials from '@screens/trainer/financials/Financials';

export const homeBottomTabs = [
  {id: 1, name: 'MyProgram', component: MyProgramStack},
  {id: 2, name: 'Financials', component: Financials},
  {id: 3, name: 'Analytics', component: Analytics},
  {id: 4, name: 'MarketPlace', component: MarketPlace},
  {id: 5, name: 'Workout', component: Workout},
  {id: 6, name: 'History', component: History},
  {id: 7, name: 'MyProfile', component: MyProfile},
  {id: 8, name: 'Settings', component: Settings},
];
