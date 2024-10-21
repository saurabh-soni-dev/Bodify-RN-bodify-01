import { Button, Container, InputContainer } from '@components';
import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import styles from './signUp.style';
import useSignUp from './useSignUp';

export interface SignUpProps {
  userSignUp: UserSignUpProps;
  signupError: UserSignUpErrorProps;
  updateSignupInputValue: (key: string, value: string | boolean) => void;
  onValidateSignUp: () => void;
  navigateToLogin: () => void;
}
export interface UserSignUpProps {
  email: string;
  isLoading: boolean;
}
export interface UserSignUpErrorProps {
  emailError?: string 
}

const SignUp: FC = () => {
  const {
    userSignUp,
    signupError,
    updateSignupInputValue,
    onValidateSignUp,
    navigateToLogin,
  } = useSignUp();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container wrapperType="scroll" headerShown showBackIcon>
        <Text allowFontScaling={false} style={styles.headingText}>Create Account</Text>
        <View style={styles.dataContainer}>
          <InputContainer
            labelSecond="Email"
            placeholder="Enter Email"
            onChangeText={res =>
              updateSignupInputValue('email', res?.toLowerCase()?.trim())
            }
            value={userSignUp?.email}
            keyboardType="email-address"
            error={signupError?.emailError}
            containerStyle={styles.inputContainerEmail}
          />
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
          label={'Continue'}
          onPress={onValidateSignUp}
          disabled={!userSignUp?.email}
          inActive={!userSignUp?.email}
          containerStyle={styles.btnContainerStyle}
          isLoading={userSignUp?.isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
