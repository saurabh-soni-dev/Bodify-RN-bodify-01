import {Button, ClipCard, Container, InputContainer} from '@components';
import imageIndex from '@imageIndex';
import svgIndex from '@svgIndex';
import React, {FC} from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './editProfile.style';
import {expertiseAddData} from './editProfile.const';
import useEditProfile from './useEditProfile';
import DatePicker from 'react-native-date-picker';
import color from '@theme/color';

export interface EditProfileProps {
  firstName: string;
  lastName: string;
  education: string;
  location: string;
  experience: string;
  experienceFormat: string;
  about: string;
  instagram?: string;
  tikTok?: string;
  youTube?: string;
  profile: string;
  backgroundProfile: string;
  isLoading?: boolean;
  visibleDatePicker: boolean;
  selectedExpertise: SelectedExpertiseProps[];
}
export interface EditProfileErrorProps {
  firstNameError?: string;
  lastNameError?: string;
  educationError?: string;
  locationError?: string;
  experienceError?: string;
  aboutError?: string;
}
export interface SelectedExpertiseProps {
  id: number;
  title: string;
}

const EditProfile: FC = () => {
  const {
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
  } = useEditProfile();
  return (
    <KeyboardAvoidingView
      style={styles.keyView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        wrapperType="scroll"
        headerShown
        lable="Edit Profile"
        showBackIcon
        containerStyle={styles.headerContainerStyle}
        containerViewStyle={styles.containerViewStyle}
        lableStyle={styles.lableStyle}>
        <Image
          style={styles.backgroundImageStyle}
          source={
            editProfile?.backgroundProfile
              ? {uri: editProfile?.backgroundProfile}
              : imageIndex.profileImage
          }
          resizeMode="cover"
        />
        <View style={styles.userViewImage}>
          <TouchableOpacity
            onPress={() => onOpenImagePicker('profile')}
            style={styles.gallaryImage}>
            <svgIndex.gallary />
          </TouchableOpacity>
          <Image
            style={styles.userImage}
            source={
              editProfile?.profile
                ? {uri: editProfile?.profile}
                : imageIndex.userProfile
            }
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => onOpenImagePicker('backgroundProfile')}
          style={styles.selectGallerystyle}>
          <svgIndex.gallary />
        </TouchableOpacity>
        <View style={styles.formView}>
          <InputContainer
            label="First Name"
            placeholder="Enter First Name"
            value={editProfile?.firstName}
            onChangeText={res =>
              updateEditProfileState('firstName', res?.trim())
            }
            keyboardType="default"
            error={editProfileError?.firstNameError}
            errorLabelStyle={styles.firstNameErrorStyle}
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
            maxLength={20}
          />
          <InputContainer
            label="Last Name"
            placeholder="Enter Last Name"
            value={editProfile?.lastName}
            onChangeText={res =>
              updateEditProfileState('lastName', res?.trim())
            }
            keyboardType="default"
            error={editProfileError?.lastNameError}
            errorLabelStyle={styles.firstNameErrorStyle}
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
            maxLength={20}
          />
          <InputContainer
            label="Education & Qualification"
            placeholder="Enter Education & Qualification"
            value={editProfile?.education}
            onChangeText={res =>
              updateEditProfileState('education', res?.trim())
            }
            keyboardType="default"
            error={editProfileError?.educationError}
            errorLabelStyle={styles.firstNameErrorStyle}
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
            maxLength={40}
          />
          <InputContainer
            label="Location"
            placeholder="Select Location"
            value={editProfile?.location}
            onChangeText={res => updateEditProfileState('location', res)}
            rightElementType="dropdown"
            onPressDropdown={navigationToLocationScreen}
            error={editProfileError?.locationError}
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
            editable={false}
          />
          <InputContainer
            label="Year of Experience"
            placeholder="Enter YOE"
            rightElementType="dropdown"
            onPressDropdown={onOpenDatePicker}
            value={`${editProfile?.experience} years`}
            onChangeText={res => updateEditProfileState('experience', res)}
            keyboardType="default"
            error={editProfileError?.experienceError}
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
            editable={false}
            maxLength={30}
          />
          {/* use date picker in experience */}
          <DatePicker
            date={new Date()}
            modal
            open={editProfile?.visibleDatePicker}
            mode="date"
            onConfirm={(res: Date) => onSelectExperience(res?.toString())}
            onCancel={onCloseDatePicker}
            theme={'light'}
            cancelText="Cancel"
            confirmText="Confirm"
            buttonColor={color.primary}
            dividerColor={color.primary}
            maximumDate={new Date()}
          />
          <InputContainer
            label="About"
            placeholder="Tell more about you..."
            value={editProfile?.about}
            onChangeText={res => updateEditProfileState('about', res)}
            keyboardType="default"
            error={editProfileError?.aboutError}
            errorLabelStyle={styles.firstNameErrorStyle}
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputAboutContainerStyle}
            multiline
            maxLength={500}
          />
          <Text allowFontScaling={false} style={styles.socialHeadingText}>
            Social
          </Text>
          <InputContainer
            label="Instagram"
            labelIcon={svgIndex.instagram}
            value={editProfile?.instagram}
            onChangeText={res =>
              updateEditProfileState('instagram', res?.trim())
            }
            placeholder="@  What is your Instagram Handle?"
            keyboardType="email-address"
            containerStyle={styles.containerStylesSocial}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <InputContainer
            label="Tiktok"
            placeholder="@  What is your Tiktok Handle?"
            value={editProfile?.tikTok}
            onChangeText={res => updateEditProfileState('tikTok', res?.trim())}
            keyboardType="email-address"
            labelIcon={svgIndex.tiktok}
            containerStyle={styles.containerStylesSocial}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <InputContainer
            label="YouTube"
            placeholder="@  What is your youtube Handle?"
            value={editProfile?.youTube}
            onChangeText={res => updateEditProfileState('youTube', res?.trim())}
            keyboardType="email-address"
            labelIcon={svgIndex.ytLable}
            containerStyle={styles.containerStylesSocial}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.expertiseView}>
            <Text allowFontScaling={false} style={styles.textStyle}>
              Add Expertise +
            </Text>
          </TouchableOpacity>
          <FlatList
            data={expertiseAddData}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(_, index) => `${index}`}
            numColumns={4}
            renderItem={({item}) => {
              const isItemSelected = editProfile?.selectedExpertise?.some(
                selectedItem => selectedItem.id === item.id,
              );

              return (
                <ClipCard
                  title={item.title}
                  onPress={() => onAddExpertise(item)}
                  titleStyle={
                    isItemSelected
                      ? styles.borderClipColorText
                      : styles.borderClipText
                  }
                  containerStyle={
                    isItemSelected
                      ? styles.borderClipColorStyle
                      : styles.borderClipStyle
                  }
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Container>
      <View style={styles.btnView}>
        <Button
          type="Solid"
          label="Save changes"
          containerStyle={styles.createPackagesBtnStyle}
          nameTextStyle={{
            ...styles.createPackagesStyle,
            color: isSave ? color.primaryText : color.secondaryBG,
          }}
          disabled={isSave}
          inActive={isSave}
          onPress={onValidateSaveChanges}
          isLoading={editProfile?.isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
