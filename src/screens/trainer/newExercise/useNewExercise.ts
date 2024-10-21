import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';
import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {RootState} from '@redux/store';
import {Toast} from '@utility/functions/toast';
import {checkName} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useMemo, useState} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import {NewExerciseErrorProps, NewExerciseProps} from './NewExercise';
import {
  equipment,
  mainMuscle,
  repsType,
  secondaryMuscle,
  setsType,
  tags,
  types,
} from './newExercise.const';

const useNewExercise = () => {
  const navigation = useAuthNavigation();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const [exerciseDetails, setExerciseDetails] = useState<NewExerciseProps>({
    exerciseName: '',
    sets: setsType,
    setsValue: '',
    setsSelectedValue: setsType[0]?.title,
    reps: repsType,
    repsValue: '',
    repsSelectedValue: repsType[2]?.title,
    types: types,
    typeSelectedValue: '',
    tags: tags,
    tagsSelectedValue: '',
    equipments: equipment,
    equipmentSelectedValue: '',
    mainMuscle: mainMuscle,
    mainMuscleSelectedValue: '',
    secondaryMuscle: secondaryMuscle,
    secondaryMuscleSelectedValue: '',
    trainerInstructions: '',
    exerciseVideo: '',
    isLoading: false,
  });
  const [newExerciseError, setNewExerciseError] =
    useState<NewExerciseErrorProps>({
      exerciseNameError: undefined,
      trainerInstructionsError: undefined,
    });

  //** Update new exercise state */
  const updateNewExerciseState = useCallback(
    (key: string, value: string | boolean | object) => {
      setExerciseDetails(prevState => ({...prevState, [key]: value}));
    },
    [exerciseDetails],
  );

  /** Handle save button enabled or disable */
  const isSaveEnabled = useMemo(
    () =>
      !(
        exerciseDetails?.exerciseName &&
        exerciseDetails?.setsSelectedValue &&
        exerciseDetails?.repsSelectedValue &&
        exerciseDetails?.typeSelectedValue &&
        exerciseDetails?.tagsSelectedValue &&
        exerciseDetails?.equipmentSelectedValue &&
        exerciseDetails?.mainMuscleSelectedValue &&
        exerciseDetails?.secondaryMuscleSelectedValue &&
        exerciseDetails?.trainerInstructions
      ),
    [exerciseDetails],
  );

  //** Start Select video from device */
  const onSelectVideo = useCallback(async () => {
    const exerciseVideo = await ImageCropPicker.openPicker({
      mediaType: 'video',
      compressVideoPreset: 'HighestQuality',
    });
    updateNewExerciseState('exerciseVideo', exerciseVideo.path);
  }, []);
  //** End Select video from device */

  //** Start Validate new exercise */
  const onValidateNewExercise = useCallback(() => {
    let tempError = {};
    if (!checkName(exerciseDetails?.exerciseName)) {
      tempError = {
        exerciseNameError: validationMessage.invalidExerciseName,
      };
    } else if (exerciseDetails?.trainerInstructions?.length >= 500) {
      tempError = {
        trainerInstructionsError: validationMessage.invalidCoachInstructions,
      };
    } else {
      tempError = {};
      onSubmitNewExercise();
    }
    setNewExerciseError(tempError);
  }, [exerciseDetails, newExerciseError]);
  //** End Validate new exercise */
  /** Start integrate the api for new exercise */
  const onSubmitNewExercise = async () => {
    updateNewExerciseState('isLoading', true);
    try {
      const formData = new FormData();
      if (exerciseDetails.exerciseVideo) {
        formData.append(params.videoExercise, {
          name: 'video.mp4',
          uri: exerciseDetails.exerciseVideo,
          type: 'video/mp4',
        });
      }
      formData.append(
        params.data,
        JSON.stringify({
          title: exerciseDetails?.exerciseName,
          defaultParametersSets: `${exerciseDetails?.setsSelectedValue}`,
          defaultParametersReps: `${exerciseDetails?.repsSelectedValue}`,
          type: exerciseDetails?.typeSelectedValue,
          tags: exerciseDetails?.tagsSelectedValue,
          equipment: exerciseDetails?.equipmentSelectedValue,
          mainMuscle: exerciseDetails?.mainMuscleSelectedValue,
          secondaryMuscle: exerciseDetails?.secondaryMuscleSelectedValue,
          trainerInstructions: exerciseDetails?.trainerInstructions,
        }),
      );
      const {data} = await axiosInstance.post(
        constant.createExercise,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      updateNewExerciseState('isLoading', false);
      if (data) {
        Toast(data?.message);
        navigation.goBack();
      }
    } catch (error: any) {
      updateNewExerciseState('isLoading', false);
      Toast(error?.response?.data?.message);
    }
  };
  /** End integrate the api for new exercise */

  //** Remove selected exercise video */
  const removeExerciseVideo = () => {
    updateNewExerciseState('exerciseVideo', '');
  };

  return {
    exerciseDetails,
    newExerciseError,
    isSaveEnabled,
    updateNewExerciseState,
    onSelectVideo,
    onValidateNewExercise,
    removeExerciseVideo,
  };
};

export default useNewExercise;
