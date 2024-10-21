import {ExerciseData} from '@screens/trainer/bodyWeightOnly/BodyWeightOnly';
import {MuscleListItemProps} from '@screens/trainer/filters/Filters';
import {FilterDataPass} from '@screens/trainer/myPrograms/MyPrograms';

export type RootStackParams = {
  Splash: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  VerifyOTP:
    | {
        type?: string;
        email?: string;
      }
    | undefined;
  ResetPassword:
    | {
        emailPass?: string;
      }
    | undefined;
  SignUp: undefined;
  CreateAccount: undefined;
  AccountType: undefined;
  TellUsMore: {selectLocation?: string} | undefined;
  HomeBottomTabs: undefined;
  MyPrograms: {
    filterData?: FilterDataPass | undefined;
  };

  CreateNewProgram:
    | {
        programId?: string;
        navigationFlag?: string;
        selectLanguage?: string;
      }
    | undefined;
  CreateNewPackages: undefined;
  Exercise:
    | {
        flag?: string;
        exerciseFlag?: string;
        setIndex?: number;
        selectedExercises?: ExerciseData[];
        //
        exerciseSelectedSuperSets?: ExerciseData[];
        flagExerciseSelect?: string;
        filterData?:
          | {
              library: MuscleListItemProps[];
              type: MuscleListItemProps[];
              mainMuscle: MuscleListItemProps[];
            }
          | undefined;
      }
    | undefined;
  MyWorkoutLibrary:
    | {
        filterData:
          | {
              library: MuscleListItemProps[];
              type: MuscleListItemProps[];
              mainMuscle: MuscleListItemProps[];
            }
          | undefined;
      }
    | undefined;
  Packages: undefined;
  ProgramName?: {
    programsName?: string;
    lengthOfWeeks?: number;
    programId?: string;
    numberOfWeeks?: Array<Object>;
  };
  ProgramDetails: undefined;
  BodyWeightOnly?: {
    selectedExercises?: exercisesProps[];
    exerciseFlag?: string;
    programName?: string;
    setIndex?: number;
    //
    exerciseSelectedSuperSets?: ExerciseData[] | exercisesProps[];
    flagExerciseSelect?: string;
    // numberOfWeeks?: BodyWeightOnlyParams;
    numberOfWeeks?: WeeksDaysListProps[];
    programId?: string;
    weeklyId?: string;
    day?: number;
  };

  Programs: undefined;
  NewExercise: undefined;
  Filters:
    | {
        filterScreenType?: string;
        filterTypeOptions?: string;
        filterOptionsData?: Array<object>;
        flagText?: String;
        filterDataPass?: {
          library?: MuscleListItemProps[];
          type?: MuscleListItemProps[];
          mainMuscle?: MuscleListItemProps[];
          level?: MuscleListItemProps[];
          status?: MuscleListItemProps[];
          price?: number;
          numberWeeks?: number;
          lowWeek?: number;
          highWeek?: number;
          highPrice?: number;
          lowPrice?: number;
        };
        maxWeeks?: number;
        maxPrice?: number;
      }
    | undefined;
  FilterOptions:
    | {
        filterTypeOptions?: string;
        filterScreenType?: string;
        filterDataOption?: Array<object>;
        maxWeeks?: number;
        maxPrice?: number;
      }
    | undefined;
  DuplicateSession: undefined;
  CreateReferralCode: undefined;
  MyProfile: undefined;
  EditProfile:
    | {
        selectLocation?: string;
      }
    | undefined;
  Location:
    | {
        flag?: string;
        selectedValue?: string;
      }
    | undefined;
  WorkoutPlan:
    | {
        programId?: string;
        programName?: string;
        typeScreen?: string;
      }
    | undefined;
  WorkoutDetails: undefined;
  ChangeEmail: undefined;
  ChangeEmailPassword: undefined;
  ChangePassword: undefined;
  Transaction: undefined;
  Language:
    | {
        flag?: string;
        selectedValue?: string;
      }
    | undefined;
  CountryRegion: undefined;
  AnalyticsFilters:
    | {
        device?: string;
        date?: {
          startDate?: string;
          endDate?: string;
        };
        selectLocation?: string;
      }
    | undefined;
  DeviceFilter: undefined;
  DatesFilter: undefined;
  MarketPlace: undefined;
  Workout: undefined;
  History: undefined;
  ReviewsAndRatings: undefined;
};
