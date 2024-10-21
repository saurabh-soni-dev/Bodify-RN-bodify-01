import {Button, Container, CustomDatePicker, InputContainer} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, RefObject} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './tellUsMore.style';
import useTellUsMore from './useTellUsMore';

export interface TellUsMoreProps {
  inputRef: RefObject<TextInput>;
  tellUsInfo: TellUsInfoProps;
  tellUsMoreError: TellUsErrorProps;
  updateTellUsMoreInputValue: (key: string, value: string | boolean) => void;
  isContinue: () => void;
  onOpenDatePicker: () => void;
  onCloseDatePicker: () => void;
  onSelectExperience: () => void;
  onValidateTellUsMore: () => void;
  navigateToLocation: () => void;
  onClickBack: () => void;
}
export interface TellUsInfoProps {
  education: string;
  experience: string;
  experienceFormat: string;
  selectLocation: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  about: string;
  selectModal: boolean;
  loading: boolean;
  visibleDatePicker: boolean;
  locFoc: boolean;
}
export interface TellUsErrorProps {
  educationError?: string;
  experienceError?: string;
  locationError?: string;
  instagramError?: string;
  tiktokError?: string;
  youtubeError?: string;
  aboutError?: string;
}

const TellUsMore: FC = () => {
  const {
    inputRef,
    tellUsInfo,
    tellUsMoreError,
    updateTellUsMoreInputValue,
    isContinue,
    onOpenDatePicker,
    onCloseDatePicker,
    onSelectExperience,
    onValidateTellUsMore,
    navigateToLocation,
    selectedLocation,
    onClickBack,
  } = useTellUsMore();

  return (
    <KeyboardAvoidingView
      style={styles.keyView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        wrapperType="scroll"
        headerShown
        showBackIcon
        onPressBackIcon={onClickBack}>
        <Text allowFontScaling={false} style={styles.headingText}>
          Tell Us More
        </Text>
        <Text allowFontScaling={false} style={styles.desText}>
          This will be part of your profile and will be presented to{'\n'}
          other people.
        </Text>
        <View style={styles.inputContainer}>
          <InputContainer
            ref={inputRef}
            labelSecond="Education & Qualification"
            placeholder="Enter education & qualifaication"
            value={tellUsInfo?.education}
            onChangeText={res => updateTellUsMoreInputValue('education', res)}
            validationLabelcolor={true}
            maxLength={50}
            keyboardType="default"
            error={tellUsMoreError?.educationError}
            containerStyle={styles.containerStyleEducation}
          />
          <CustomDatePicker
            label="Experience"
            placeholder="Years of Experience"
            visible={tellUsInfo?.visibleDatePicker}
            onOpen={onOpenDatePicker}
            value={tellUsInfo?.experience}
            onConfirm={(res: Date) => onSelectExperience(res?.toString())}
            onClose={onCloseDatePicker}
            maxDate={new Date()}
            containerStyle={styles.containerStyleLocation}
          />
          <InputContainer
            value={selectedLocation}
            labelSecond="Location"
            placeholder="Select Location"
            rightElementType="dropdown"
            onPressDropdown={navigateToLocation}
            editable={false}
            inputContainerStyle={{
              borderWidth: tellUsInfo?.locFoc ? 1.5 : 1,
              borderColor: tellUsInfo?.locFoc ? color.primary : color.lightgray,
            }}
            containerStyle={styles.locContainer}
          />
        </View>
        {/* Social Media Details */}
        <View style={styles.socialView}>
          <Text allowFontScaling={false} style={styles.socialHeadingText}>
            Social
          </Text>
          <InputContainer
            labelSecond="Instagram"
            labelSecondIcon={svgIndex.instagram}
            placeholder="@  What is your Instagram Handle? (optional)"
            value={tellUsInfo?.instagram}
            onChangeText={res =>
              updateTellUsMoreInputValue('instagram', res?.trim())
            }
            maxLength={20}
            keyboardType="default"
            error={tellUsMoreError?.instagramError}
            containerStyle={styles.instagramInputContainer}
            inputContainerStyle={styles.socialInputContainer}
          />
          <InputContainer
            labelSecond="Tiktok"
            labelSecondIcon={svgIndex.tiktok}
            placeholder="@  What is your Tiktok Handle? (optional)"
            value={tellUsInfo?.tiktok}
            onChangeText={res =>
              updateTellUsMoreInputValue('tiktok', res?.trim())
            }
            maxLength={20}
            keyboardType="default"
            error={tellUsMoreError?.tiktokError}
            containerStyle={styles.inputView}
            inputContainerStyle={styles.socialInputContainer}
          />
          <InputContainer
            labelSecond="Youtube"
            labelSecondIcon={svgIndex.ytLable}
            placeholder="@  What is your youtube Handle? (optional)"
            value={tellUsInfo?.youtube}
            onChangeText={res =>
              updateTellUsMoreInputValue('youtube', res?.trim())
            }
            maxLength={20}
            keyboardType="default"
            error={tellUsMoreError?.youtubeError}
            containerStyle={styles.youtubeContainer}
            inputContainerStyle={styles.socialInputContainer}
          />
          <InputContainer
            labelSecond="About"
            placeholder="Tell more about you"
            value={tellUsInfo?.about}
            onChangeText={res => updateTellUsMoreInputValue('about', res)}
            multiline={true}
            maxLength={500}
            keyboardType="default"
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.aboutInput}
            error={tellUsMoreError?.aboutError}
            errorLabelStyle={styles.errorLabelStyle}
          />
        </View>
      </Container>
      <View style={styles.buttonContainer}>
        <Button
          label="Continue"
          onPress={onValidateTellUsMore}
          disabled={isContinue}
          inActive={isContinue}
          containerStyle={styles.btnContainerStyle}
          isLoading={tellUsInfo?.loading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TellUsMore;
