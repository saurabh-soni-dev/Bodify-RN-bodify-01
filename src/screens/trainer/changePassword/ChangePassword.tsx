import {
  Button,
  ConfirmationModal,
  Container,
  InputContainer,
} from '@components';
import imageIndex from '@imageIndex';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {styles} from './changePassword.style';
import useChangePassword from './useChangePassword';
import color from '@theme/color';

export interface ChangePasswordProps {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  confirmationModal: boolean;
  isLoading: boolean;
}
export interface PasswordChangeErrorProps {
  oldPasswordError?: string;
  newPasswordError?: string;
  confirmPasswordError?: string;
}
const ChangePassword: FC = () => {
  const {
    passwordChange,
    updatePasswordChange,
    handleModal,
    onValidateSaveChanges,
    passwordChangeError,
    isSave,
  } = useChangePassword();
  return (
    <>
      <KeyboardAvoidingView
        style={styles.keyBoardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Container
          wrapperType="scroll"
          headerShown
          showBackIcon
          lable="Change Password"
          containerViewStyle={styles.containerViewStyle}
          containerStyle={styles.headerContainerStyle}>
          <Text style={styles.headerDescriptionText} allowFontScaling={false}>
            Make sure you remember the password to log in.
          </Text>
          <View style={styles.inputContentContainers}>
            <InputContainer
              label="Old Password"
              placeholder="Enter Old Password"
              onChangeText={res => updatePasswordChange('oldPassword', res)}
              value={passwordChange?.oldPassword}
              containerStyle={styles.oldPasswordInputStyle}
              inputContainerStyle={styles.oldInputContainerStyle}
              inputStyle={styles.inputTextStyle}
              rightElementType="password"
              maxLength={16}
              error={passwordChangeError?.oldPasswordError}
              errorLabelStyle={styles.inputErrorLabelStyle}
            />
            <InputContainer
              label="New Password"
              placeholder="Enter New Password"
              onChangeText={res => updatePasswordChange('newPassword', res)}
              value={passwordChange?.newPassword}
              containerStyle={styles.newPasswordInputStyle}
              inputContainerStyle={styles.oldInputContainerStyle}
              inputStyle={styles.inputTextStyle}
              rightElementType="password"
              maxLength={16}
              error={passwordChangeError?.newPasswordError}
              errorLabelStyle={styles.inputErrorLabelStyle}
            />
            <InputContainer
              label="Confirm Password"
              placeholder="Enter Confirm Password"
              onChangeText={res => updatePasswordChange('confirmPassword', res)}
              value={passwordChange?.confirmPassword}
              containerStyle={styles.confirmPasswordInputStyle}
              inputContainerStyle={styles.oldInputContainerStyle}
              inputStyle={styles.inputTextStyle}
              rightElementType="password"
              maxLength={16}
              error={passwordChangeError?.confirmPasswordError}
              errorLabelStyle={styles.inputErrorLabelStyle}
            />
          </View>
        </Container>
        <View style={styles.btnView}>
          <Button
            type="Solid"
            label="Save Changes"
            containerStyle={styles.createPackagesBtnStyle}
            nameTextStyle={{
              ...styles.createPackagesStyle,
              color: isSave ? color.primaryText : color.secondaryBG,
            }}
            onPress={onValidateSaveChanges}
            // onPress={handleModal}
            disabled={isSave}
            inActive={isSave}
            isLoading={passwordChange?.isLoading}
          />
        </View>
      </KeyboardAvoidingView>
      <ConfirmationModal
        visible={passwordChange?.confirmationModal}
        animationType="slide"
        image={imageIndex.emailConfirmation}
        titleText={`Your new password has been\nupdated!`}
        confirmLabel="Done"
        onConfirm={handleModal}
        onClose={handleModal}
        btnViewStyle={styles.btnViewStyle}
        confirmLableStyle={styles.confirmLableStyle}
        confirmBtnStyle={styles.confirmBtnStyle}
      />
    </>
  );
};

export default ChangePassword;
