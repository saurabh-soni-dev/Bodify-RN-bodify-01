import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {updateToken} from '@redux/userReducer/reducer';
import {Log} from '@utility/log';
import {useCallback, useEffect, useState} from 'react';
import {MyProfileProps} from './MyProfile';
import {reviewsList, userData, workoutPlans} from './myProfileData.const';

type Key = 'workoutPlans' | 'reviewsList' | string;

const useMyProfile = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const {token, refreshToken} = useAppSelector(
    (state: RootState) => state.UserData,
  );
  const [profileInfo, setProfileInfo] = useState<MyProfileProps>({
    workoutPlans,
    reviewsList,
    userData: {
      userId: '',
      firstName: '',
      lastName: '',
      subscribers: '',
      EducationAndQualification: '',
      Location: '',
      YearOfExperience: '',
      About: '',
      Instagram: '',
      Tiktok: '',
      AddExpertise: [],
      userProfile: '',
      userBackgroundImage: '',
      reviews: [],
      totalReviews: '',
      overallRating: {
        count: 0,
        ratings: 0,
      },
    },
    isLoading: false,
    myProgramsList: [],
  });

  // **Handle state update**
  const updateProfileState = useCallback(<T>(key: Key, value: T) => {
    setProfileInfo(prevState => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    if (isFocused) {
      refreshTokenUpdate();
      updateProfileState('isLoading', true);
      getMyProgramList();
      updateProfileState('userData', userData);
    }
  }, [isFocused, updateProfileState]);

  // **Navigate to edit profile screen**
  const navigateToEditProfile = useCallback(() => {
    navigation.navigate('EditProfile');
  }, [navigation]);

  // ** start programs list api call **
  const getMyProgramList = async () => {
    try {
      const {data} = await axiosInstance.get(constant.programList, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      updateProfileState('isLoading', false);
      if (data) {
        updateProfileState('myProgramsList', data);
      }
    } catch (error) {
      Log('Error myProfile ProgramsList :', error);
      updateProfileState('isLoading', false);
    }
  };
  // ** end programs list api call **

  /** Start api for refresh access token */
  const refreshTokenUpdate = async () => {
    try {
      const {headers} = await axiosInstance.get(constant.refreshToken, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      const updatedToken = headers?.['set-cookie']
        ?.find(cookie => cookie?.includes('accessToken'))
        ?.split(';')[0]
        .split('=')[1];
      dispatch(updateToken(updatedToken));
    } catch (error) {
      Log('Error refreshing token:', error);
    }
  };
  /** End api for refresh access token */

  return {
    profileInfo,
    navigateToEditProfile,
    updateProfileState,
  };
};

export default useMyProfile;
