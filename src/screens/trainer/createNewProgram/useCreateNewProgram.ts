import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import * as param from '@config/params';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {Toast} from '@utility/functions/toast';
import {
  checkName,
  checkNumeric,
  checkString,
} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useEffect, useMemo, useState} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import {NewProgramsErrorProps, NewProgramsStateProps} from './CreateNewProgram';
import {Keyboard} from 'react-native';

const useCreateNewProgram = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('CreateNewProgram');
  const {token} = useAppSelector(state => state.UserData);
  const isFocused = useIsFocused();

  const [newProgramsState, setNewProgramsState] =
    useState<NewProgramsStateProps>({
      programName: '',
      programDescription: '',
      workoutType: '',
      levelOfDifficulty: '',
      numberOfWeeks: '',
      language: '',
      squareThumbnail: '',
      rectangularThumbnail: '',
      trailerVideo: '',
      levelOfDifficultyList: [],
      workoutTypeList: [],
      weeksList: [],
      isLoading: false,
      confirmationModal: false,
      isBackLoading: false,
      programId: '',
      screenName: 'Create New Program',
      isGoBack: false,
    });
  const [newProgramError, setNewProgramError] = useState<NewProgramsErrorProps>(
    {
      programNameError: undefined,
      workoutTypeError: undefined,
      levelOfDifficultyError: undefined,
      numberOfWeekError: undefined,
      languageError: undefined,
      squareThumbnailError: undefined,
      rectangularThumbnailError: undefined,
    },
  );

  //** Update create program state */
  const updateNewProgramState = useCallback(
    (key: string, value: string | boolean | Array<object>) => {
      setNewProgramsState(prevState => ({...prevState, [key]: value}));
    },
    [],
  );

  const weeksData = useMemo(
    () =>
      Array.from({length: 52}, (_, i) => ({
        id: i + 1,
        title: (i + 1).toString(),
      })),
    [],
  );

  useEffect(() => {
    if (
      isFocused &&
      params?.selectLanguage &&
      newProgramsState.language !== params.selectLanguage
    ) {
      updateNewProgramState('language', params.selectLanguage);
    }
  }, [isFocused, params, newProgramsState.language, updateNewProgramState]);

  useEffect(() => {
    if (
      isFocused &&
      params?.programId &&
      params?.navigationFlag &&
      newProgramsState.programId !== params.programId &&
      newProgramsState?.screenName !== params?.navigationFlag
    ) {
      updateNewProgramState('programId', params?.programId);
      updateNewProgramState('screenName', 'Edit Program');
    }
  }, [isFocused, params, newProgramsState.programId, updateNewProgramState]);

  useEffect(() => {
    updateNewProgramState('weeksList', weeksData);
  }, [updateNewProgramState, weeksData]);

  /** Start integrate to get workout type api */
  const apiGetWorkoutType = useCallback(async () => {
    try {
      const {data} = await axiosInstance.get(constant.workoutTypeList, {
        headers: {Authorization: `Bearer ${token}`},
      });
      const tempWorkouttype = data?.types?.map((item: string) => ({
        id: `${Math.random()}`,
        title: item,
      }));
      updateNewProgramState('workoutTypeList', tempWorkouttype);
    } catch (error) {}
  }, [token, updateNewProgramState]);
  /** End integrate to get workout type api */

  /** Start integrate to get level of difficulty api */
  const apiGetLevel = useCallback(async () => {
    try {
      const {data} = await axiosInstance.get(constant.levelList, {
        headers: {Authorization: `Bearer ${token}`},
      });
      const tempLevel = data?.levels?.map((item: string) => ({
        id: `${Math.random()}`,
        title: item,
      }));
      updateNewProgramState('levelOfDifficultyList', tempLevel);
    } catch (error) {}
  }, [token, updateNewProgramState]);
  /** End integrate to get level of difficulty api */

  useEffect(() => {
    apiGetWorkoutType();
    apiGetLevel();
  }, []);

  /** Handle Create Program button active & deactive */
  const isCreateProgramButton = useMemo(
    () =>
      !(
        newProgramsState.programName &&
        newProgramsState.workoutType &&
        newProgramsState.levelOfDifficulty &&
        newProgramsState.numberOfWeeks &&
        newProgramsState.language &&
        newProgramsState.rectangularThumbnail &&
        newProgramsState.squareThumbnail
      ),
    [newProgramsState],
  );

  //** Show confimations modal */
  const handleBackButton = useCallback(() => {
    if (newProgramsState.isGoBack) {
      navigation.goBack();
    } else {
      updateNewProgramState(
        'confirmationModal',
        !newProgramsState.confirmationModal,
      );
      Keyboard.dismiss();
    }
  }, [
    newProgramsState.confirmationModal,
    updateNewProgramState,
    newProgramsState.isGoBack,
  ]);

  //** Navigate to language screen */
  const navigationToLanguageScreen = useCallback(() => {
    navigation.navigate('Language', {
      flag: 'CreateNewProgram',
      selectedValue: newProgramsState.language,
    });
    Keyboard.dismiss();
  }, [navigation, newProgramsState.language]);

  /** Start upload thumbnails & trainer video */
  const uploadThumbnails = async (
    type: 'squareThumbnail' | 'rectangularThumbnail' | 'trailerVideo',
  ) => {
    try {
      if (type === 'trailerVideo') {
        let mediaVideo = await ImageCropPicker.openPicker({
          mediaType: 'video',
          compressVideoPreset: 'HighestQuality',
        });
        updateNewProgramState(type, mediaVideo.path);
      } else {
        let mediaImg = await ImageCropPicker.openPicker({mediaType: 'photo'});
        updateNewProgramState(type, mediaImg.path);
      }
    } catch (error) {}
  };
  /** Start upload thumbnails & trainer video  */

  //** Navigate to Program Name screen */
  const navigateToProgramName = useCallback(
    (programId: string) => {
      navigation.navigate('ProgramName', {
        programsName: newProgramsState?.programName,
        lengthOfWeeks: parseInt(newProgramsState?.numberOfWeeks),
        programId: programId,
      });
      Keyboard.dismiss();
    },
    [newProgramsState],
  );

  /** Start validate the create new program */
  const validateCreateNewProgram = useCallback(
    (isBack: number = 0) => {
      let tempError = {};
      if (!checkName(newProgramsState.programName)) {
        tempError = {
          programNameError: validationMessage.invalidProgramName,
        };
      } else if (!checkString(newProgramsState?.workoutType)) {
        tempError = {
          workoutTypeError: validationMessage.emptyWorkoutType,
        };
      } else if (!checkString(newProgramsState?.levelOfDifficulty)) {
        tempError = {
          levelOfDifficultyError: validationMessage.emptyLevelOfDifficulty,
        };
      } else if (!checkNumeric(newProgramsState?.numberOfWeeks)) {
        tempError = {
          numberOfWeekError: validationMessage.emptyNumberOfWeeks,
        };
      } else if (!newProgramsState?.language) {
        tempError = {
          languageError: validationMessage.emptyLanguage,
        };
      } else if (!newProgramsState?.squareThumbnail) {
        tempError = {
          squareThumbnailError: validationMessage.emptySquareThumbnail,
        };
      } else if (!newProgramsState?.rectangularThumbnail) {
        tempError = {
          rectangularThumbnailError:
            validationMessage.emptyRectangularThumbnail,
        };
      } else {
        tempError = {};
        apiCreateProgram(isBack);
      }
      setNewProgramError(tempError);
    },
    [newProgramsState, newProgramError, validationMessage],
  );
  /** End validate the create new program */

  /** Start integrate the api for create new program */
  const apiCreateProgram = async (isBack: number) => {
    updateNewProgramState(isBack == 1 ? 'isBackLoading' : 'isLoading', true);
    try {
      const formData = new FormData();
      if (newProgramsState.trailerVideo) {
        formData.append(param.default.trailer, {
          name: 'video.mp4',
          uri: newProgramsState.trailerVideo,
          type: 'video/mp4',
        });
      }
      formData.append(param.default.thumbnail, {
        name: 'image.png',
        uri: newProgramsState.squareThumbnail,
        type: 'image/png',
      });
      formData.append(param.default.smallThumbnail, {
        name: 'image.png',
        uri: newProgramsState.rectangularThumbnail,
        type: 'image/png',
      });
      formData.append(
        param.default.data,
        JSON.stringify({
          programName: newProgramsState.programName,
          programDescription: newProgramsState.programDescription,
          trainingType: newProgramsState.workoutType,
          levelDifficulty: newProgramsState.levelOfDifficulty,
          numberOfWeeks: Number(newProgramsState.numberOfWeeks),
          language: newProgramsState.language,
        }),
      );
      const {data} = await axiosInstance.post(
        constant.createProgram,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      Toast(data?.message);
      if (isBack === 1) {
        updateNewProgramState('isBackLoading', false);
        navigation.navigate('MyPrograms');
      } else {
        updateNewProgramState('isGoBack', true);
        updateNewProgramState('isLoading', false);
        navigateToProgramName(data?.programId);
      }
    } catch (error: any) {
      Toast(error?.response?.data);
      updateNewProgramState('isBackLoading', false);
      updateNewProgramState('isLoading', false);
    }
  };
  /** End integrate the api for create new program */

  //** Handle back navigate confirmation modal */
  const handleConfimrationModal = (type: 'Yes' | 'Cancel') => {
    switch (type) {
      case 'Yes':
        validateCreateNewProgram(1);
        updateNewProgramState('confirmationModal', false);
        break;
      case 'Cancel':
        updateNewProgramState('confirmationModal', false);
        navigation.navigate('MyPrograms');
        break;
      default:
        break;
    }
  };

  //** Start update program api call */
  const updateProgram = async () => {
    updateNewProgramState('isLoading', true);
    try {
      const formData = new FormData();
      if (newProgramsState.trailerVideo) {
        formData.append(param.default.trailer, {
          name: 'video.mp4',
          uri: newProgramsState.trailerVideo,
          type: 'video/mp4',
        });
      }
      formData.append(param.default.thumbnail, {
        name: 'image.png',
        uri: newProgramsState.squareThumbnail,
        type: 'image/png',
      });
      formData.append(param.default.smallThumbnail, {
        name: 'image.png',
        uri: newProgramsState.rectangularThumbnail,
        type: 'image/png',
      });
      formData.append(
        param.default.data,
        JSON.stringify({
          programName: newProgramsState.programName,
          programDescription: newProgramsState.programDescription,
          trainingType: newProgramsState.workoutType,
          levelDifficulty: newProgramsState.levelOfDifficulty,
          numberOfWeeks: Number(newProgramsState.numberOfWeeks),
          language: newProgramsState.language,
        }),
      );
      const {data} = await axiosInstance.put(constant.editProgram, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data) {
        Toast(data?.message);
        updateNewProgramState('isLoading', false);
      }
    } catch (error: any) {
      Toast(error?.response?.data);
      updateNewProgramState('isLoading', false);
    }
  };
  //** End update program api call */

  return {
    newProgramsState,
    newProgramError,
    updateNewProgramState,
    isCreateProgramButton,
    handleBackButton,
    handleConfimrationModal,
    navigationToLanguageScreen,
    uploadThumbnails,
    validateCreateNewProgram,
    updateProgram,
  };
};

export default useCreateNewProgram;
