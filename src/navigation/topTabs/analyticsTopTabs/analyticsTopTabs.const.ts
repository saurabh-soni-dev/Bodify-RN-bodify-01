import AnalyticsFinancialManagement from '@screens/trainer/analyticsFinancialManagement/AnalyticsFinancialManagement';
import AnalyticsReferralManagement from '@screens/trainer/analyticsReferralManagement/AnalyticsReferralManagement';
import Overview from '@screens/trainer/overview/Overview';
import ProgramManagement from '@screens/trainer/programManagement/ProgramManagement';
import TraineeManagement from '@screens/trainer/traineeManagement/TraineeManagement';
import UserEngagement from '@screens/trainer/userManagement/UserEngagement';

export const analyticsTopTabs = [
  {
    id: 1,
    name: 'Overview',
    component: Overview,
    options: {
      tabBarLabel: 'Overview',
    },
  },
  {
    id: 2,
    name: 'ProgramManagement',
    component: ProgramManagement,
    options: {
      tabBarLabel: 'Program Management',
    },
  },
  {
    id: 3,
    name: 'AnalyticsReferralManagement',
    component: AnalyticsReferralManagement,
    options: {
      tabBarLabel: 'Referral Management',
    },
  },
  {
    id: 4,
    name: 'AnalyticsFinancialManagement',
    title: 'Financial Management',
    component: AnalyticsFinancialManagement,
    options: {
      tabBarLabel: 'Financial Management',
    },
  },
  {
    id: 5,
    name: 'TraineeManagement',
    component: TraineeManagement,
    options: {
      tabBarLabel: 'Trainee Management',
    },
  },
  {
    id: 6,
    name: 'UserEngagement',
    component: UserEngagement,
    options: {
      tabBarLabel: 'User Engagement',
    },
  },
];
