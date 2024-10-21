import {
  Button,
  ConfirmationModal,
  Container,
  InputContainer,
} from '@components';
import imageIndex from '@imageIndex';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {styles} from './changeEmail.style';
import useChangeEmail from './useChangeEmail';
import color from '@theme/color';

export interface ChangeEmailProps {
  emailChange: emailChangeProps;
  updateEmailChange: () => (
    key: string,
    value: string | boolean | number,
  ) => void;
  isNext: () => void;
  onPressNext: () => void;
  handleModal: () => void;
}
export interface emailChangeProps {
  currentEmail: string;
  email: string;
  verificationCode: string;
  changeStep: number;
  confirmationModal: boolean;
}
export interface emailChangeErrorProps {
  currentEmailError?: string;
  emailError?: string;
  verificationCodeError?: string;
}

const ChangeEmail: FC = () => {
  const {
    emailChange,
    updateEmailChange,
    isNext,
    onPressNext,
    handleModal,
    onValidationNext,
    emailChangeError,
  } = useChangeEmail();
  return (
    <>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Container
          wrapperType="scroll"
          headerShown
          showBackIcon
          lable="Change Email"
          containerViewStyle={styles.containerViewStyle}
          containerStyle={styles.headerContainerStyle}>
          <Text style={styles.headerDescriptionText} allowFontScaling={false}>
            {emailChange?.changeStep == 1
              ? 'Please enter new email address'
              : 'We have sent you a verification code to your new email. Please add it here in order to continue.'}
          </Text>
          <View style={styles.inputContentContainers}>
            {emailChange?.changeStep === 2 ? (
              <InputContainer
                label="New Email Address"
                placeholder="Enter Email"
                value={emailChange?.email}
                onChangeText={res => updateEmailChange('email', res)}
                keyboardType="email-address"
                lableRowStyle={styles.emailInputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
              />
            ) : (
              <InputContainer
                label="Current Email"
                placeholder="Enter Email"
                value={emailChange?.currentEmail}
                onChangeText={res => updateEmailChange('currentEmail', res)}
                keyboardType="email-address"
                lableRowStyle={styles.emailInputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                error={emailChangeError?.currentEmailError}
                errorLabelStyle={styles.inputErrorLabel}
              />
            )}
            {emailChange?.changeStep === 1 ? (
              <InputContainer
                label="New Email Address"
                placeholder="Enter New Email"
                value={emailChange?.email}
                onChangeText={res => updateEmailChange('email', res)}
                keyboardType="email-address"
                containerStyle={styles.verificationInputContainer}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.verificationTextInput}
                error={emailChangeError?.emailError}
                errorLabelStyle={styles.inputOtpErrorLabel}
              />
            ) : (
              <InputContainer
                label="Verification Code"
                placeholder="Enter OTP"
                onChangeText={res => updateEmailChange('verificationCode', res)}
                value={emailChange?.verificationCode}
                containerStyle={styles.verificationInputContainer}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.verificationTextInput}
                keyboardType="numeric"
                maxLength={6}
                error={emailChangeError?.verificationCodeError}
                errorLabelStyle={styles.inputOtpErrorLabel}
              />
            )}
          </View>
        </Container>
        <View style={styles.btnView}>
          <Button
            type="Solid"
            label="Next"
            containerStyle={styles.createPackagesBtnStyle}
            nameTextStyle={{
              ...styles.createPackagesStyle,
              color: isNext ? color.primaryText : color.secondaryBG,
            }}
            onPress={onValidationNext}
            // onPress={onPressNext}
            inActive={isNext}
            disabled={isNext}
          />
        </View>
      </KeyboardAvoidingView>
      <ConfirmationModal
        visible={emailChange?.confirmationModal}
        animationType="slide"
        image={imageIndex.emailConfirmation}
        titleText={`Your new email has been\nupdated!`}
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

export default ChangeEmail;
