import { Button, Container, InputContainer } from '@components';
import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import styles from './forgotPassword.style';
import useForgotPassword from './useForgotPassword';

export interface ForgotPasswordProps {
  forgetPassInfo: ForgetPassInfoProps;
  forgetPasswordError: ForgotPasswordErrorProps;
  updateForgetPasswordInputValue: (key: string, value: string | boolean) => void;
  onValidateForgetPassword: () => void;
  navigateToLogin: () => void;
}
export interface ForgetPassInfoProps {
  email: string;
  isLoading: boolean;
}
export interface ForgotPasswordErrorProps {
  emailError?: string | undefined;
}

const ForgotPassword: FC = () => {
  const {
    forgetPassInfo,
    forgetPasswordError,
    updateForgetPasswordInputValue,
    onValidateForgetPassword,
    navigateToLogin,
  } = useForgotPassword();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container wrapperType="scroll" headerShown showBackIcon>
        <Text allowFontScaling={false} style={styles.headingText}>Forget Password?</Text>
        <View style={styles.dataContainer}>
          <InputContainer
            labelSecond="Email"
            placeholder="Enter Email"
            value={forgetPassInfo?.email}
            onChangeText={res => updateForgetPasswordInputValue('email',res)}
            keyboardType="email-address"
            error={forgetPasswordError?.emailError}
            containerStyle={styles.inputContainerEmail}
          />
          <Text allowFontScaling={false}
            style={[
              styles.description,
              {marginTop: forgetPasswordError?.emailError ? 15 : 0},
            ]}>
            Please enter your email so we could send {'\n'}you your password
          </Text>
        </View>
      </Container>
      <View style={styles.buttonContainer}>
        <Text allowFontScaling={false} style={styles.rememberLabel}>
          Remember password?{' '}
          <Text allowFontScaling={false} onPress={navigateToLogin} style={styles.loginLabel}>
            Log in
          </Text>
          .
        </Text>
        <Button
          label="Continue"
          onPress={onValidateForgetPassword}
          disabled={!forgetPassInfo?.email}
          inActive={!forgetPassInfo?.email}
          isLoading={forgetPassInfo?.isLoading}
          containerStyle={styles.btnContainerStyle}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
