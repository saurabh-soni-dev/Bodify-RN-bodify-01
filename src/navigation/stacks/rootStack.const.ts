import HomeBottomTabs from '@navigation/bottomTabs/homeBottomTabs/HomeBottomTabs';
import AccountType from '@screens/auth/accountType/AccountType';
import CreateAccount from '@screens/auth/createAccount/CreateAccount';
import ForgotPassword from '@screens/auth/forgotPassword/ForgotPassword';
import Login from '@screens/auth/login/Login';
import ResetPassword from '@screens/auth/resetPassword/ResetPassword';
import SignUp from '@screens/auth/signUp/SignUp';
import Splash from '@screens/auth/splash/Splash';
import TellUsMore from '@screens/auth/tellUsMore/TellUsMore';
import VerifyOTP from '@screens/auth/verifyOTP/VerifyOTP';
import EditProfile from '@screens/editProfile/EditProfile';
import MyProfile from '@screens/myProfile/MyProfile';
import History from '@screens/trainee/history/History';
import MarketPlace from '@screens/trainee/marketPlace/MarketPlace';
import Workout from '@screens/trainee/workout/Workout';
import AnalyticsFilters from '@screens/trainer/analyticsFilters/AnalyticsFilters';
import BodyWeightOnly from '@screens/trainer/bodyWeightOnly/BodyWeightOnly';
import ChangeEmail from '@screens/trainer/changeEmail/ChangeEmail';
import ChangeEmailPassword from '@screens/trainer/changeEmailPassword/ChangeEmailPassword';
import ChangePassword from '@screens/trainer/changePassword/ChangePassword';
import CountryRegion from '@screens/trainer/countryRegion/CountryRegion';
import CreateNewPackages from '@screens/trainer/createNewPackages/CreateNewPackages';
import CreateNewProgram from '@screens/trainer/createNewProgram/CreateNewProgram';
import CreateReferralCode from '@screens/trainer/createReferralCode/CreateReferralCode';
import DatesFilter from '@screens/trainer/datesFilter/DatesFilter';
import DeviceFilter from '@screens/trainer/deviceFilter/DeviceFilter';
import DuplicateSession from '@screens/trainer/duplicateSession/DuplicateSession';
import Exercise from '@screens/trainer/exercise/Exercise';
import FilterOptions from '@screens/trainer/filterOptions/FilterOptions';
import Filters from '@screens/trainer/filters/Filters';
import Language from '@screens/trainer/language/Language';
import Location from '@screens/trainer/location/Location';
import MyWorkoutLibrary from '@screens/trainer/myWorkoutLibrary/MyWorkoutLibrary';
import NewExercise from '@screens/trainer/newExercise/NewExercise';
import Packages from '@screens/trainer/packages/Packages';
import ProgramDetails from '@screens/trainer/programDetails/ProgramDetails';
import ProgramName from '@screens/trainer/programName/ProgramName';
import Programs from '@screens/trainer/programs/Programs';
import ReviewsAndRatings from '@screens/trainer/reviewsAndRatings/ReviewsAndRatings';
import Transaction from '@screens/trainer/transaction/Transaction';
import WorkoutDetails from '@screens/trainer/workoutDetails/WorkoutDetails';
import WorkoutPlan from '@screens/trainer/workoutPlan/WorkoutPlan';

export const stackScreens = [
  {name: 'Splash', component: Splash},
  {name: 'Login', component: Login},
  {name: 'ForgotPassword', component: ForgotPassword},
  {name: 'VerifyOTP', component: VerifyOTP},
  {name: 'ResetPassword', component: ResetPassword},
  {name: 'SignUp', component: SignUp},
  {name: 'CreateAccount', component: CreateAccount},
  {name: 'AccountType', component: AccountType},
  {name: 'TellUsMore', component: TellUsMore},
  {name: 'HomeBottomTabs', component: HomeBottomTabs},
  {
    name: 'CreateNewProgram',
    component: CreateNewProgram,
  },
  {
    name: 'CreateNewPackages',
    component: CreateNewPackages,
  },
  {name: 'Exercise', component: Exercise},
  {name: 'Packages', component: Packages},
  {name: 'ProgramName', component: ProgramName},
  {name: 'ProgramDetails', component: ProgramDetails},
  {name: 'BodyWeightOnly', component: BodyWeightOnly},
  {name: 'Programs', component: Programs},
  {name: 'NewExercise', component: NewExercise},
  {name: 'Filters', component: Filters},
  {name: 'FilterOptions', component: FilterOptions},
  {
    name: 'DuplicateSession',
    component: DuplicateSession,
  },
  {
    name: 'CreateReferralCode',
    component: CreateReferralCode,
  },
  {name: 'MyProfile', component: MyProfile},
  {name: 'EditProfile', component: EditProfile},
  {name: 'Location', component: Location},
  {name: 'WorkoutPlan', component: WorkoutPlan},
  {
    name: 'WorkoutDetails',
    component: WorkoutDetails,
  },
  {name: 'ChangeEmail', component: ChangeEmail},
  {
    name: 'ChangeEmailPassword',
    component: ChangeEmailPassword,
  },
  {name: 'ChangePassword', component: ChangePassword},
  {name: 'Transaction', component: Transaction},
  {name: 'Language', component: Language},
  {name: 'CountryRegion', component: CountryRegion},
  {
    name: 'AnalyticsFilters',
    component: AnalyticsFilters,
  },
  {name: 'DeviceFilter', component: DeviceFilter},
  {name: 'DatesFilter', component: DatesFilter},
  {name: 'MarketPlace', component: MarketPlace},
  {name: 'Workout', component: Workout},
  {name: 'History', component: History},
  {
    name: 'MyWorkoutLibrary',
    component: MyWorkoutLibrary,
  },
  {
    name: 'ReviewsAndRatings',
    component: ReviewsAndRatings,
  },
];
