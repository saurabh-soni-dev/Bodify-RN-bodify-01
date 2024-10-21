import {UploadCard} from '@card';
import {
  Button,
  CustomStatusbar,
  Dropdown,
  Header,
  InputContainer,
} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import styles from './newExercise.style';
import useNewExercise from './useNewExercise';

export interface NewExerciseProps {
  exerciseName: string;
  sets: itemProps[];
  setsValue: string;
  setsSelectedValue: string;
  reps: itemProps[];
  repsValue: string;
  repsSelectedValue: string;
  types: itemProps[];
  typeSelectedValue: string;
  tags: itemProps[];
  tagsSelectedValue: string;
  equipments: itemProps[];
  equipmentSelectedValue: string;
  mainMuscle: itemProps[];
  mainMuscleSelectedValue: string;
  secondaryMuscle: itemProps[];
  secondaryMuscleSelectedValue: string;
  trainerInstructions: string;
  exerciseVideo: string;
  isLoading: boolean;
}
export interface NewExerciseErrorProps {
  exerciseNameError?: string;
  trainerInstructionsError?: string;
}
interface itemProps {
  id: number;
  title: string;
}

const NewExercise: FC = () => {
  const {
    exerciseDetails,
    newExerciseError,
    isSaveEnabled,
    updateNewExerciseState,
    onSelectVideo,
    onValidateNewExercise,
    removeExerciseVideo,
  } = useNewExercise();

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <CustomStatusbar
        barStyle="dark-content"
        backgroundColor={color.primaryBG}
      />
      <Header
        lable="New Exercise"
        showBackIcon
        containerStyle={styles.headerStyle}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        alwaysBounceVertical={false}
        bounces={false}>
        <View style={styles.formContainer}>
          <InputContainer
            label="Exercise Name"
            placeholder="Enter Exercise Name"
            value={exerciseDetails?.exerciseName}
            onChangeText={res => updateNewExerciseState('exerciseName', res)}
            maxLength={50}
            keyboardType="default"
            error={newExerciseError?.exerciseNameError}
            inputContainerStyle={styles.inputBoxStyle}
            containerStyle={styles.inputContainerStyle}
            lableRowStyle={styles.labelViewStyle}
            labelStyle={styles.labelStyle}
          />
          <View style={styles.dropDownView}>
            <View style={styles.leftFlex}>
              <Dropdown
                label="Default Parameters"
                placeholder="Sets"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseDetails?.sets}
                value={exerciseDetails?.setsSelectedValue}
                setValue={res =>
                  updateNewExerciseState('setsSelectedValue', res)
                }
              />
            </View>
            <View style={styles.rightFlex}>
              <Dropdown
                label=" "
                placeholder="Reps"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseDetails?.reps}
                value={exerciseDetails?.repsSelectedValue}
                setValue={res =>
                  updateNewExerciseState('repsSelectedValue', res)
                }
              />
            </View>
          </View>
          <View style={styles.dropDownView}>
            <View style={styles.leftFlex}>
              <Dropdown
                label="Type"
                placeholder="Select Exercise Type"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseDetails?.types}
                value={exerciseDetails?.typeSelectedValue}
                setValue={res =>
                  updateNewExerciseState('typeSelectedValue', res)
                }
              />
            </View>
            <View style={styles.rightFlex}>
              <Dropdown
                label="Tags"
                placeholder="Select Tags"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseDetails?.tags}
                value={exerciseDetails?.tagsSelectedValue}
                setValue={res =>
                  updateNewExerciseState('tagsSelectedValue', res)
                }
              />
            </View>
          </View>
          <Dropdown
            label="Equipment"
            placeholder="Select equipments"
            mainViewStyle={styles.equipmentMainView}
            containerStyle={styles.containerStyle}
            data={exerciseDetails?.equipments}
            value={exerciseDetails?.equipmentSelectedValue}
            setValue={res =>
              updateNewExerciseState('equipmentSelectedValue', res)
            }
          />
          <View style={styles.dropDownView}>
            <View style={styles.leftFlex}>
              <Dropdown
                label="Main Muscle"
                placeholder="Select Muscle"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseDetails?.mainMuscle}
                value={exerciseDetails?.mainMuscleSelectedValue}
                setValue={res =>
                  updateNewExerciseState('mainMuscleSelectedValue', res)
                }
              />
            </View>
            <View style={styles.rightFlex}>
              <Dropdown
                label="Secondary Muscle"
                placeholder="Select Muscle"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseDetails?.secondaryMuscle}
                value={exerciseDetails?.secondaryMuscleSelectedValue}
                setValue={res =>
                  updateNewExerciseState('secondaryMuscleSelectedValue', res)
                }
              />
            </View>
          </View>
          <UploadCard
            icon={SvgIndex.upload}
            lable="Upload video"
            uploadText="Upload your trailer video"
            uploadButtonText="Upload video"
            mediaType="video"
            uri={exerciseDetails?.exerciseVideo}
            onPress={onSelectVideo}
            containerStyle={styles.uploadCardContainer}
            uploadContainerStyle={styles.videoUploadContanier}
            videoStyle={styles.videoPlayer}
            uploadButtonTextStyle={styles.uploadTextRegular}
            uploadButtonStyle={styles.uploadButton}
          />
          {/* </View> */}
          <InputContainer
            labelSecond="Coach Instructions"
            placeholder="Please explain how to perform this exercise"
            value={exerciseDetails?.trainerInstructions}
            onChangeText={res =>
              updateNewExerciseState('trainerInstructions', res)
            }
            multiline={true}
            maxLength={500}
            keyboardType="default"
            error={newExerciseError?.trainerInstructionsError}
            containerStyle={styles.coachInstructionInput}
            errorLabelStyle={styles.errorLabelStyle}
            inputContainerStyle={styles.coachInstructionInputStyle}
          />
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
          label="Save"
          disabled={isSaveEnabled}
          inActive={isSaveEnabled}
          isLoading={exerciseDetails?.isLoading}
          containerStyle={styles.bottonView}
          onPress={onValidateNewExercise}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewExercise;
