import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {useCallback, useEffect, useMemo, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  EditProfileErrorProps,
  EditProfileProps,
  SelectedExpertiseProps,
} from './EditProfile';
import {checkString} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import * as param from '@config/params';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';

const useEditProfile = () => {
  const navigation = useAuthNavigation();
  const route = useAuthRoute('EditProfile');
  const {userData, token} = useAppSelector(
    (state: RootState) => state.UserData,
  );
  const [editProfile, setEditProfile] = useState<EditProfileProps>({
    firstName: 'Yash Kaushal',
    lastName: 'Yash Kaushal',
    education: 'Fitness Trainer',
    location: '',
    experience: '5',
    experienceFormat: '"2024-09-07T10:32:27.000Z"',
    about: 'Hello',
    instagram: '',
    tikTok: '',
    youTube: '',
    isLoading: false,
    profile: '',
    backgroundProfile: '',
    visibleDatePicker: false,
    selectedExpertise: [],
  });
  const [editProfileError, setEditProfileError] =
    useState<EditProfileErrorProps>({
      firstNameError: undefined,
      lastNameError: undefined,
      educationError: undefined,
      locationError: undefined,
      experienceError: undefined,
      aboutError: undefined,
    });

  useEffect(() => {
    if (route?.params?.selectLocation) {
      updateEditProfileState('location', route?.params?.selectLocation);
    } else {
      updateEditProfileState('location', 'India');
    }
  }, [route]);

  //** Update edit profile state */
  const updateEditProfileState = useCallback(
    (key: string, value: string | boolean | number | Array<object>) => {
      setEditProfile(prevState => ({...prevState, [key]: value}));
    },
    [editProfile],
  );

  //** Navigate to Location screen */
  const navigationToLocationScreen = useCallback(() => {
    navigation.navigate('Location', {
      flag: 'EditProfile',
      selectedValue: editProfile?.location,
    });
  }, [editProfile]);

  //** start Change user profile image  */
  const onOpenImagePicker = (type: string) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      cropping: true,
    }).then(image => {
      if (type == 'profile') {
        updateEditProfileState('profile', image?.path);
      } else {
        updateEditProfileState('backgroundProfile', image?.path);
      }
      onChangeProfileApi(type == 'profile' ? 'profile' : 'backgroundProfile');
    });
  };
  //** end Change user profile image  */

  //** start Change user profile image api  */
  const onChangeProfileApi = useCallback(
    async (profileType: string) => {
      const formData = new FormData();
      if (profileType === 'profile' && editProfile.profile) {
        formData.append(param.default.userProfile, {
          name: 'image.png',
          uri: editProfile.profile,
          type: 'image/png',
        });
      } else if (
        profileType === 'backgroundProfile' &&
        editProfile.backgroundProfile
      ) {
        formData.append(param.default.userBackgroundImage, {
          name: 'image.png',
          uri: editProfile.backgroundProfile,
          type: 'image/png',
        });
      }
      try {
        const {data} = await axiosInstance.put(
          profileType === 'profile'
            ? constant?.userProfile
            : constant?.userBackgroundProfile,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        if (data) {
          Log('profile change user=======++>>>>>>>', data);
        }
      } catch (error: any) {
        Toast(error?.response?.data?.message);
      }
    },
    [editProfile, token],
  );
  //** end Change user profile image api  */

  //** start handle date picker open */
  const onOpenDatePicker = () => {
    updateEditProfileState(
      'visibleDatePicker',
      !editProfile?.visibleDatePicker,
    );
  };
  //** end handle date picker open */

  //** start handle date picker close */
  const onCloseDatePicker = () => {
    updateEditProfileState('visibleDatePicker', false);
  };
  //** end handle date picker close */

  //** start Select experience */
  const onSelectExperience = (date: string) => {
    const selectedDate = new Date(date);
    const referenceDate = new Date();
    const yearsDifference =
      referenceDate.getFullYear() - selectedDate.getFullYear();
    updateEditProfileState('experience', yearsDifference);
    updateEditProfileState('experienceFormat', date);
  };
  //** end Select experience */

  //** Handle save button isDisabled & isActive*/
  const isSave = useMemo(
    () =>
      !editProfile?.firstName ||
      !editProfile?.lastName ||
      !editProfile?.education ||
      !editProfile?.location ||
      !editProfile?.experience ||
      !editProfile?.about ||
      !editProfile?.selectedExpertise.length,
    [editProfile],
  );

  //* Validate Edit Profile /
  const onValidateSaveChanges = useCallback(() => {
    let tempError = {};
    if (!checkString(editProfile?.firstName)) {
      tempError = {
        firstNameError: validationMessage.invalidFirstName,
      };
    } else if (!checkString(editProfile?.lastName)) {
      tempError = {
        lastNameError: validationMessage.invalidLastName,
      };
    } else if (!checkString(editProfile?.education)) {
      tempError = {
        educationError: validationMessage.invalidEducation,
      };
    } else if (editProfile?.about?.length >= 500) {
      tempError = {
        aboutError: validationMessage.invalidAbout,
      };
    } else {
      tempError = {};
      onSaveUserInformation();
    }
    setEditProfileError(tempError);
  }, [editProfile, editProfileError, validationMessage]);

  //* start Final EditProfile api call /
  const onSaveUserInformation = useCallback(async () => {
    updateEditProfileState('isLoading', true);
    const formData = new FormData();
    formData.append(param.default.firstName, editProfile.firstName);
    formData.append(param.default.lastName, editProfile.lastName);
    formData.append(
      param.default.educationAndQualification,
      editProfile.education,
    );
    formData.append(param.default.location, editProfile.location);
    formData.append(param.default.experience, editProfile.experienceFormat);
    formData.append(param.default.about, editProfile.about);
    const socialMedia = {
      Instagram: editProfile?.instagram,
      Tiktok: editProfile?.tikTok,
      YouTube: editProfile?.youTube,
    };
    formData.append(param.default.socialMedia, JSON.stringify(socialMedia));
    if (
      editProfile?.selectedExpertise &&
      editProfile.selectedExpertise.length > 0
    ) {
      formData.append(
        param.default.addExpertise,
        JSON.stringify(editProfile.selectedExpertise),
      );
    }
    try {
      const {data} = await axiosInstance.put(constant?.editProfile, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data) {
        updateEditProfileState('isLoading', false);
        Toast('User details updated successfully');
        navigation.goBack();
      }
    } catch (error: any) {
      updateEditProfileState('isLoading', false);
      Toast(error?.response?.data?.message);
    }
  }, [editProfile]);
  //* end Final EditProfile api call /

  //* start add Expertise functionality /
  const onAddExpertise = useCallback(
    (item: SelectedExpertiseProps) => {
      let prevExpertise = [...editProfile?.selectedExpertise];
      if (prevExpertise.includes(item)) {
        prevExpertise = prevExpertise.filter(
          selectedItem => selectedItem.id !== item.id,
        );
      } else {
        prevExpertise = [...prevExpertise, item];
      }
      updateEditProfileState('selectedExpertise', prevExpertise);
    },
    [editProfile],
  );
  //* end add Expertise functionality /

  return {
    editProfile,
    editProfileError,
    updateEditProfileState,
    onOpenImagePicker,
    navigationToLocationScreen,
    onOpenDatePicker,
    onSelectExperience,
    onCloseDatePicker,
    isSave,
    onValidateSaveChanges,
    onAddExpertise,
  };
};

export default useEditProfile;
