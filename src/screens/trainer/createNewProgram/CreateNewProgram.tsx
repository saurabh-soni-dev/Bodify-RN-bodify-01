import {UploadCard} from '@card';
import {
  Button,
  Container,
  Dropdown,
  ErrorText,
  InputContainer,
  ModalComponent,
  Spinner,
} from '@components';
import ImageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import Color from '@theme/color';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './createNewProgram.style';
import useCreateNewProgram from './useCreateNewProgram';
import Video from 'react-native-video';

export interface NewProgramsStateProps {
  programName: string;
  programDescription: string;
  workoutType: string;
  levelOfDifficulty: string;
  numberOfWeeks: string;
  language: string;
  squareThumbnail: string;
  rectangularThumbnail: string;
  trailerVideo: string;
  workoutTypeList: Array<DropdownProps>;
  levelOfDifficultyList: Array<DropdownProps>;
  weeksList: Array<DropdownProps>;
  confirmationModal: boolean;
  isLoading: boolean;
  isBackLoading: boolean;
  programId: string;
  screenName?: string;
  isGoBack: boolean;
}
interface DropdownProps {
  id: number;
  title: string;
}
export interface NewProgramsErrorProps {
  programNameError?: string;
  workoutTypeError?: string;
  levelOfDifficultyError?: string;
  numberOfWeekError?: string;
  languageError?: string;
  squareThumbnailError?: string;
  rectangularThumbnailError?: string;
}
const CreateNewProgram: FC = () => {
  const {
    newProgramsState,
    newProgramError,
    updateNewProgramState,
    isCreateProgramButton,
    handleBackButton,
    handleConfimrationModal,
    navigationToLanguageScreen,
    uploadThumbnails,
    validateCreateNewProgram,
  } = useCreateNewProgram();
  return (
    <>
      <Container
        wrapperType="form"
        headerShown
        showBackIcon
        scrollViewProps={{scrollEnabled: false}}
        bounces={false}
        lable={newProgramsState?.screenName}
        lableStyle={styles.headerLabelStyle}
        statusBarColor={Color.primaryBG}
        containerStyle={styles.headerContainerStyle}
        onPressBackIcon={handleBackButton}>
        <View style={styles.mainContainer}>
          <InputContainer
            placeholder="Enter a program name"
            placeholderTextColor={Color.primaryText}
            label="Program Name"
            value={newProgramsState?.programName}
            onChangeText={res => updateNewProgramState('programName', res)}
            labelStyle={styles.inputLabelStyle}
            keyboardType="default"
            maxLength={50}
            inputContainerStyle={styles.ProgramNameInputStyle}
            inputStyle={styles.inputTextStyle}
            containerStyle={styles.inputNameMainStyle}
            error={newProgramError?.programNameError}
            errorLabelStyle={styles.errorLabel}
            inputProps={{autoCorrect: true}}
          />
          <InputContainer
            placeholder="Enter a program description"
            placeholderTextColor={Color.primaryText}
            label="Program Description"
            value={newProgramsState?.programDescription}
            onChangeText={res =>
              updateNewProgramState('programDescription', res)
            }
            labelStyle={styles.inputLabelStyle}
            labelSecondOptional="(optional)"
            keyboardType="default"
            inputContainerStyle={styles.programDescription}
            multiline={true}
            maxLength={250}
            inputStyle={styles.inputTextStyle}
            containerStyle={styles.inputMainStyle}
            inputProps={{autoCorrect: true}}
          />
          <View style={styles.rowHorizantal}>
            <View style={styles.dropDownRowView}>
              <Dropdown
                mainViewStyle={styles.dropDownContainerStyle}
                placeholder="Enter Training Type"
                label="Workout Type"
                data={newProgramsState.workoutTypeList}
                lableStyle={styles.dropDownLabelTextStyle}
                containerStyle={styles.containerStyle}
                placeholderStyle={styles.dropDownPlaceholderStyle}
                arrowHeight={21}
                arrowWidth={18}
                value={newProgramsState.workoutType}
                setValue={res => updateNewProgramState('workoutType', res)}
                error={newProgramError?.workoutTypeError}
              />
              <View style={styles.dropDownSpaceManage} />
              <Dropdown
                mainViewStyle={styles.dropDownContainerStyle}
                placeholder="Enter difficulty"
                label="Level of Difficulty"
                data={newProgramsState.levelOfDifficultyList}
                containerStyle={styles.containerStyle}
                lableStyle={styles.dropDownLabelTextStyle}
                placeholderStyle={styles.dropDownPlaceholderStyle}
                arrowHeight={21}
                arrowWidth={18}
                value={newProgramsState.levelOfDifficulty}
                setValue={res =>
                  updateNewProgramState('levelOfDifficulty', res)
                }
                error={newProgramError?.levelOfDifficultyError}
              />
            </View>
            <View style={styles.dropDownRowView}>
              <Dropdown
                mainViewStyle={styles.dropDownContainerStyle}
                containerStyle={styles.containerStyle}
                placeholder="Duration (weeks)"
                label="Number of Weeks"
                data={newProgramsState?.weeksList}
                lableStyle={styles.dropDownLabelTextStyle}
                placeholderStyle={styles.dropDownPlaceholderStyle}
                arrowHeight={21}
                arrowWidth={18}
                value={newProgramsState.numberOfWeeks}
                setValue={res => updateNewProgramState('numberOfWeeks', res)}
                error={newProgramError?.numberOfWeekError}
              />
              <View style={styles.dropDownSpaceManage} />
              <View style={styles.languageView}>
                <Text allowFontScaling={false} style={styles.languageLable}>
                  Language
                </Text>
                <TouchableOpacity
                  style={styles.languageCard}
                  activeOpacity={0.6}
                  onPress={navigationToLanguageScreen}>
                  <Text
                    allowFontScaling={false}
                    numberOfLines={1}
                    style={
                      newProgramsState?.language
                        ? styles.valueText
                        : styles.languagePlaceholder
                    }>
                    {newProgramsState.language
                      ? newProgramsState.language
                      : 'Select Language'}
                  </Text>
                  <SvgIndex.downArrow />
                </TouchableOpacity>
                <ErrorText error={newProgramError?.languageError} />
              </View>
            </View>
          </View>
          {/* Thumbnails images */}
          <Text allowFontScaling={false} style={styles.imageText}>
            Thumbnail Images
          </Text>
          <View style={styles.thumbnailView}>
            <UploadCard
              icon={SvgIndex.upload}
              uploadText={`Upload a\n squared image`}
              uploadButtonText="Upload image"
              mediaType="image"
              uri={newProgramsState.squareThumbnail}
              onPress={() => uploadThumbnails('squareThumbnail')}
              containerStyle={styles.uploadCardContainer}
            />
            <UploadCard
              icon={SvgIndex.upload}
              uploadText="Upload 16:9 ratio image"
              uploadButtonText="Upload image"
              mediaType="image"
              uri={newProgramsState.rectangularThumbnail}
              onPress={() => uploadThumbnails('rectangularThumbnail')}
              uploadContainerStyle={styles.uploadImageRatioStyle}
              imageStyle={styles.uploadImageRatioStyle}
            />
          </View>
          <ErrorText error={newProgramError?.squareThumbnailError} />
          <ErrorText error={newProgramError?.rectangularThumbnailError} />
          {/* Trailer video */}
          <UploadCard
            icon={SvgIndex.upload}
            lable="Trailer Video"
            optionalLable="(optional)"
            uploadText="Upload your trailer video"
            uploadButtonText="Upload video"
            mediaType="video"
            uri={newProgramsState.trailerVideo}
            onPress={() => uploadThumbnails('trailerVideo')}
            containerStyle={styles.uploadCardContainer}
            uploadContainerStyle={styles.uploadCardTrailerContainer}
          />
        </View>
      </Container>
      <ModalComponent
        visible={newProgramsState?.confirmationModal}
        animationType="slide"
        containerStyle={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <Image
            source={ImageIndex.logout}
            resizeMode="contain"
            style={styles.imageStyle}
          />
          <Text allowFontScaling={false} style={styles.modalTitleText}>
            Are you sure you want to go back without saving?
          </Text>
          <View style={styles.btnView}>
            <Button
              label="Yes"
              type="Solid"
              containerStyle={styles.btnSolidContainer}
              nameTextStyle={styles.namesSolidButtonTextStyle}
              onPress={() => handleConfimrationModal('Yes')}
            />
            <Button
              label="Cancel"
              type="Solid"
              containerStyle={styles.btnContainer}
              nameTextStyle={styles.nameTextStyle}
              onPress={() => handleConfimrationModal('Cancel')}
            />
          </View>
        </View>
      </ModalComponent>
      <Spinner
        visible={newProgramsState.isBackLoading}
        label="Submitting program details"
      />
      <Button
        label="Create Program"
        onPress={validateCreateNewProgram}
        containerStyle={styles.buttonView}
        marginHorizontal={68}
        disabled={isCreateProgramButton}
        inActive={isCreateProgramButton}
        isLoading={newProgramsState.isLoading}
      />
    </>
  );
};

export default CreateNewProgram;
