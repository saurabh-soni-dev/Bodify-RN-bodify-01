import {Button, Container, InputContainer} from '@components';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import styles from './resetPassword.style';
import useResetPassword from './useResetPassword';

export interface ResetPasswordProps {
  passwordInfo: PasswordInfoProps;
  resetPasswordError: PasswordInfoErrorProps;
  isResetPassword: () => void;
  updateResetPasswordInputValue: (key: string, value: string | boolean) => void;
  onValidateResetPassword: () => void;
  navigateToLogin: () => void;
}
export interface PasswordInfoProps {
  newPassword: string;
  confirmPassword: string;
  isLoading: boolean;
}
export interface PasswordInfoErrorProps {
  newPasswordError?: string | undefined;
  confirmPasswordError?: string | undefined;
}

const ResetPassword: FC = () => {
  const {
    passwordInfo,
    resetPasswordError,
    isResetPassword,
    updateResetPasswordInputValue,
    navigateToLogin,
    onValidateResetPassword,
  } = useResetPassword();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container wrapperType="scroll" headerShown showBackIcon>
        <Text allowFontScaling={false} style={styles.headingText}>
          Reset Password
        </Text>
        <Text allowFontScaling={false} style={styles.desText}>
          Please enter password that you’ll{'\n'}remember
        </Text>
        <View style={styles.dataContainer}>
          <InputContainer
            labelSecond="New Password"
            placeholder="Enter Password"
            rightElementType="password"
            value={passwordInfo?.newPassword}
            onChangeText={val =>
              updateResetPasswordInputValue('newPassword', val)
            }
            maxLength={15}
            error={resetPasswordError?.newPasswordError}
            containerStyle={styles.inputContainer}
          />
          <InputContainer
            labelSecond="Confirm Password"
            placeholder="Enter Password"
            rightElementType="password"
            value={passwordInfo?.confirmPassword}
            onChangeText={val =>
              updateResetPasswordInputValue('confirmPassword', val)
            }
            error={resetPasswordError?.confirmPasswordError}
            maxLength={15}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text allowFontScaling={false} style={styles.rememberLabel}>
            Remember password?{' '}
            <Text
              allowFontScaling={false}
              onPress={navigateToLogin}
              style={styles.loginLabel}>
              Log in
            </Text>
            .
          </Text>
          <Button
            label="Reset Password"
            onPress={onValidateResetPassword}
            disabled={isResetPassword}
            inActive={isResetPassword}
            isLoading={passwordInfo?.isLoading}
            containerStyle={styles.btnContainerStyle}
          />
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;
